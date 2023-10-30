import React from 'react'
import {useRef,useEffect,useState, useCallback} from "react"
import { useDispatch } from 'react-redux'
import "./bet.scss"
import {MdOutlineCancel} from 'react-icons/md'
const Bet = ({options:{xy,toggleDisplay,list,dispatcher,betType,odd}}) => {
    const position=useRef()
    const dispatch=useDispatch()
    const [betMoney,setBetMoney]=useState('')
    const app=document.getElementById("app")
    const [error,setError]=useState(false)
    const [scrollHeight,scrollWidth]=[window.scrollY,window.scrollX]
    useEffect(()=>{
    
        if(position.current){
            const [windowWidth,windowHeight]=[window.innerWidth,window.innerHeight]
            const[width,height]=[position.current.offsetWidth,position.current.offsetHeight]
     
            position.current.style.position="fixed";
            const [pointX,pointY]=[xy.x-scrollWidth,xy.y-scrollHeight]
            if (pointX+width<windowWidth){
                position.current.style.left=pointX+"px";
            }
            else{
                position.current.style.left=pointX-width+"px"
            }
            if(pointY+height<windowHeight){

                position.current.style.top=pointY+"px";
            }
            else{
                position.current.style.top=pointY-height+"px";
            }
            
            
        }
       
    },[position,xy])

    const onBetClicked=()=>{
       
        if(betMoney<10 || betMoney >5000){
            console.log(betMoney)
            setError(true)
    }
    else{
        dispatch(dispatcher({bet:list,amount:betMoney}))
        toggleDisplay(false)
        setError(false)
    }
    }
    const onBetChange=({target})=>{
        const {value}=target
        setBetMoney(parseInt(value))
    }
    const offDisplay=()=>{
        toggleDisplay(false)
    }
   
  return (
<div className="position-adjuster">
    <div className="bet-container" ref={position} draggable>
        <MdOutlineCancel className="cancel-icon" onClick={offDisplay}/>
        <div className="bet-type-container">
            <div className="betType"><span className="span-bold">Bet Type</span>: {betType}</div>
            <div><span className="span-bold">Bet Odd:</span> {odd}:1</div>
            <div className="bet-numbers">
            <span className="span-bold">Bet:&nbsp;</span>
            {
                Array.isArray(list)?<><span>[</span>
                {list.map((item,index)=>{
    
                    return <li key={index}>{item}</li>
    
    
                })}
            <span>]</span></>:<li>{list}</li>
            }
            
            
        </div>
        </div>
        
        
        <input type="number" className="bet-input" placeholder='place your bet in birr' value={betMoney} onChange={onBetChange}/>
        <span><button type="button" className="bet-button" onClick={onBetClicked}>Bet</button></span>
{error &&    <small className="error">bets greater than 10birr and less 5000birr allowed</small>}

    </div>
    </div>
  )
}

export default Bet