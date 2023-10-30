import React from 'react'
import * as bet from "../../Store/BetSlice/betSelector"
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import winSlice, { addWin } from '../../Store/WinSlice/winSlice'
import BetTypeList from '../betListType/betListType'
import {switchMatch} from "../../util"
import { winSliceSelector } from '../../Store/WinSlice/winSelector'
import "./winCheck.scss"

const WinCheck = ({prizeNumber}) => {
    const dispatch=useDispatch()

    const oneToOne=useSelector(bet.oneToOneBet)
    const twoToOne=useSelector(bet.twoToOneSelector)
    const straightUp=useSelector(bet.straightUpSelector)
    const split=useSelector(bet.splitSelector)
    const corner=useSelector(bet.cornerSelector)
    const doubleLine=useSelector(bet.doubleLineSelector)
    const street=useSelector(bet.streetSelector)
    const topLine=useSelector(bet.topLineSelector)
    const stringVals=[
        {
            betType:"1to1",
            item:oneToOne
    } ,
    {
        betType:"2to1",
        item:twoToOne
    }


]
    const arrayVals=[
        {
            betType:"split",
            item:split
        },
        {
            betType:"corner",
            item:corner
        },
        {
            betType:"doubleLine",
            item:doubleLine
        },
        {
            betType:"street",
            item:street
        },
        {
            betType:"topLine",
            item:topLine
        }
    ]
    const StringCheck=(number,{betType,item})=>{
        const {bets,odd,amounts}=item
        const win={
            name:betType,
            odd:odd,
            winBets:[],
            winAmounts:[]
        }
        
        if(bets.length>0){
           
            bets.forEach((item,index)=>{
                if(switchMatch(number,item)){
                    win.winBets.push(item)
                    win.winAmounts.push(amounts[index])
                }
            })
            if(win.winBets.length>0)dispatch(addWin(win))
        }

    }
    
 
    const straightUpCheck=(number)=>{
        const {bets,amounts,odd}=straightUp
        const win={
            name:"straightUp",
            odd:odd,
            winBets:[],
            winAmounts:[]
        }
        if(bets.length>0){
            const index=bets.indexOf(number.toString())
            
            if(index!=-1){
                win.winBets.push(bets[index])
                win.winAmounts.push(amounts[index]);
            }
            if(win.winBets.length>0)dispatch(addWin(win))
        }
    }
    const otherCheck=(number,{betType,item})=>{
        const {bets,amounts,odd}=item
        number=number.toString()
        const win={
            name:betType,
            odd:odd,
            winBets:[],
            winAmounts:[]
        }
        if(bets.length>0 && JSON.stringify(bets).includes(number)){
            bets.forEach((item,index)=>{
                if(item.includes(number)){
                  
                    win.winBets.push(item)
                    win.winAmounts.push(amounts[index])
                }


            })
            if(win.winBets.length>0)dispatch(addWin(win))
        }
    }
    const winCheck=(number)=>{

        straightUpCheck(number)
        stringVals.forEach(item=>{
            StringCheck(number,item)
        })
        arrayVals.forEach(item=>{
            otherCheck(number,item)
        })
    }
    useEffect(()=>{

        winCheck(prizeNumber)

    },[])
  return (
   <>
    </>
  )
}

const WinList=({prizeNumber})=>{

    const wins=useSelector(winSliceSelector)
    
    const totalWinnings=()=>{
        let totalSum=0
 Object.keys(wins).map((item)=>{
    
    const {winAmounts,odd}=wins[item]

    winAmounts.forEach((item,index)=>{
        totalSum+= item*odd

    })


 })
 console.log(totalSum)
 return totalSum

    }
    return(
        <div className="win-list">
        <WinCheck prizeNumber={prizeNumber}/>
        <div>
        {
        Object.keys(wins).length>0 ?
        
        <div className="betList-container">
            <div className="bets-title">Winning Number : {prizeNumber}</div>
         {   
         Object.keys(wins).map((item)=>{
            const {winBets,winAmounts,odd}=wins[item]
          
                return <BetTypeList startBetting={false} name={item} bets={winBets} amounts={winAmounts} odd={odd} key={item}/>
 
              
    
            }) 
            
            }

<div className="total-winnings">
          Total:  {totalWinnings()}$
        </div>
        </div>
        :<div className="looser">Sorry You Lost!!&#128557;&#128557;&#128540;</div>
    
    }
       
        </div>
        
        </div>
    ) 

}

export default WinList