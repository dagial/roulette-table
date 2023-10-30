import React from 'react'
import "./topLine.scss"

import {useDispatch,useSelector} from "react-redux"
import { setStraightUp} from '../../Store/BetSlice/straightUP/straightUpSlice'
import { setSplit, deleteSplit } from '../../Store/BetSlice/split/splitSlice'
import { splitOddSelector } from '../../Store/BetSlice/split/splitSelector'
import { straightUpOddSelector } from '../../Store/BetSlice/straightUP/straightUpSelector'
import { setStreet } from '../../Store/BetSlice/street/streetSlice';
import { streetOddSelector } from '../../Store/BetSlice/street/streetSelector';
import { setTopLine } from '../../Store/BetSlice/topLine/topLineSlice'
import { topLineOddSelector } from '../../Store/BetSlice/topLine/topLineSelector'



const TopLine = ({setBetOptions,toggleDisplay}) => {
  const dispatch=useDispatch()
  const splitOdd=useSelector(splitOddSelector)
  const straightUpOdd=useSelector(straightUpOddSelector)
  const streetOdd=useSelector(streetOddSelector)
  const topLineOdd=useSelector(topLineOddSelector)



  const onFirstLongClick=(e)=>{
    const ar=["0","3"]
    
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
  }
  const onFirstShortClick=(e)=>{
    const ar=["0","2"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
  }
  const onFirstCornerClick=(e)=>{
    const ar=["0","2","3"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"trio",dispatcher:setStreet,toggleDisplay:toggleDisplay,odd:streetOdd})
    toggleDisplay(true)
  }
  const onSecondLongClick=(e)=>{
    const ar=["00","1"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
  }
  const onSecondShortClick=(e)=>{
    const ar=["00","2"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
  }
  const onSecondCornerClick=(e)=>{
    const ar=["00","1","2"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"trio",dispatcher:setStreet,toggleDisplay:toggleDisplay,odd:streetOdd})
    toggleDisplay(true)
  }
  const bottomCornerClick=(e)=>{
    const ar=["0","00","1","2","3"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"top Line",dispatcher:setTopLine,toggleDisplay:toggleDisplay,odd:topLineOdd})
    toggleDisplay(true)
  }
  const onIntersectionClick=(e)=>{
    const ar=["0","00"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
  }
  const onIntersectionCornerClick=(e)=>{
    const ar=["0","00","2"]
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"trio",dispatcher:setStreet,toggleDisplay:toggleDisplay,odd:streetOdd})
    toggleDisplay(true)
  }
  const onContentClick=(e)=>{
    const {value}=e.target
   
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:value,betType:"straight up",dispatcher:setStraightUp,toggleDisplay:toggleDisplay,odd:straightUpOdd})
    toggleDisplay(true)
    
  }

  return (
    <div className="top-line-container">
      {/* { displayBet && betOptions &&<Bet options={betOptions}/>} */}
      <div className="top-line-box">
        <button className="content" onClick={onContentClick} value={0} >
          0
        </button>
        <div className="first-line" onClick={onFirstLongClick} ></div>
        <div className="corner-container1" >

          <div className="top-line-corner" onClick={onFirstCornerClick}></div>
        </div>
        <div className="second-line" onClick={onFirstShortClick}></div>
      </div>
      <div className="top-line-intersection">
      <div className="top-line-corner" onClick={onIntersectionCornerClick}></div>
      <div className="top-line-border" onClick={onIntersectionClick}></div>
      </div>
      <div className="top-line-box">
      <button className="content" value="00" onClick={onContentClick}>
          00
        </button>
      <div className="second-line" onClick={onSecondShortClick}></div>
        <div className="corner-container">

          <div className="top-line-corner" onClick={onSecondCornerClick}></div>
        </div>
        
        <div className="first-line" onClick={onSecondLongClick}></div>
      </div>
      <div className="top-line-bottom-corner" onClick={bottomCornerClick}></div>
    </div>
  )
}

export default TopLine