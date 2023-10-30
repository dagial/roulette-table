import React from 'react'
import Countdown,{zeroPad,CountdownApi} from 'react-countdown'
import {useRef} from "react"
import "./countDown.scss"

const Test=()=><span>completed</span>
const renderer = ({ hours, minutes, seconds, completed,api ,props}) => {
    const {className}=props
    if (completed) {

      return <Test/>
    } else {
      // Render a countdown
      return <span className={className}>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  };
const BetCountDown = ({setWheelProps,setStartBetting}) => {
  return (
    <Countdown  date={Date.now() + 60000} className="time-count" renderer={renderer} zeroPadTime={2} 
    onComplete={(date,completed)=>{
        const a = Math.floor(Math.random() * (36- 1 + 1)) + 1;
        setWheelProps({prizeNum:a,startSpin:true})
        setStartBetting(false)


    }}/>
  )
}

export default BetCountDown