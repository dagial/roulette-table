import React from 'react'
import {useState} from "react"
import "./centerBox.scss"
import { useSelector, useDispatch } from 'react-redux'
import { rouletteSelector } from '../../Store/RouletteSlice/rouletteSelector'
import { setStraightUp} from '../../Store/BetSlice/straightUP/straightUpSlice'
import { setSplit, deleteSplit } from '../../Store/BetSlice/split/splitSlice'
import { splitOddSelector } from '../../Store/BetSlice/split/splitSelector'
import { straightUpOddSelector } from '../../Store/BetSlice/straightUP/straightUpSelector'
import { colorClass } from '../../util'
import { setCorner } from '../../Store/BetSlice/corner/cornerSlice'
import { cornerOddSelector } from '../../Store/BetSlice/corner/cornerSelector'

const CenterBox = ({row,index, last ,setBetOptions,toggleDisplay}) => {
    const dispatch=useDispatch()
    const roulette=useSelector(rouletteSelector)
    const splitOdd=useSelector(splitOddSelector)
    const straightUpOdd=useSelector(straightUpOddSelector)
    const cornerOdd=useSelector(cornerOddSelector)
    
    const [top,center,bottom]=row
    const onTopClick=(e)=>{
      let ar=[center,top]
      ar=ar.map(item=>item.toString())
      setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)

    }
    const onBottomClick=(e)=>{
        let ar=[center,bottom]
        ar=ar.map(item=>item.toString())
        setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
        toggleDisplay(true)

    }
    const onLeftClick=(e)=>{
      if(!last){
        const i=index;
      let ar =[center,roulette[i+1][1]]
      ar=ar.map(item=>item.toString())
      setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
      }
      

    }
    const onBottomCornerClick=(e)=>{
      const i= index
      let ar=[center,bottom,roulette[i+1][1],roulette[i+1][2]]
      ar=ar.map(item=>item.toString())

      setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"Corner",dispatcher:setCorner,toggleDisplay:toggleDisplay,odd:cornerOdd})
        toggleDisplay(true)
    }
    const onTopCornerClick=(e)=>{
      const i =index
      let ar=[top,center,roulette[i+1][0],roulette[i+1][1]]
      ar=ar.map(item=>item.toString())

      setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"Corner",dispatcher:setCorner,toggleDisplay:toggleDisplay,odd:cornerOdd})
        toggleDisplay(true)
    }
    const onCenterClick=(e)=>{
      const {value}=e.target
      setBetOptions({xy:{x:e.pageX,y:e.pageY},list:value,betType:"straight up",dispatcher:setStraightUp,toggleDisplay:toggleDisplay,odd:straightUpOdd})
    toggleDisplay(true)
    }
  return (
    <div className="center-box-container">
        <div className="top-border" onClick={onTopClick}>
        </div>
        <div className="bottom-border" onClick={onBottomClick} >
        </div>
        <button className={colorClass(center)} onClick={onCenterClick} value={center}>
            {center}
        </button>
        <div className="left-border" onClick={onLeftClick}>
        </div>
        {!last && <><div className="b-l-corner" onClick={onBottomCornerClick}></div>
        <div className="t-l-corner" onClick={onTopCornerClick}></div></>}
    </div>
  )
}

export default CenterBox