import React from 'react'
import { Wheel } from 'react-custom-roulette'
import {useState} from "react"
import { rouletteColor } from '../../util'
import "./wheel.scss"


const ary=[
    "0","28","9","26","30","11","7","20","32","17","5","22","34","15","3","24","36","13","1","00","27",
    "10","25", "29", "12", "8", "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2"
]

const data=ary.map((item)=>{

    if (item=="0" || item =="00"){
        return {
            option:item,
            style: {
                "backgroundColor": "#055E45",
                "textColor": "white"
            }
            
        }
    }
    return rouletteColor(parseInt(item))


})
const BetWheel= ({wheelProps,setWinnerShow}) => {
    const {startSpin,prizeNum}=wheelProps
    const prize=ary.indexOf(prizeNum.toString())
    return(
        <div className="wheel-design">
            <div className="center-border"></div>
            <div className="wheel-container">
          <Wheel 
        mustStartSpinning={startSpin}
        spinDuration={2}
        prizeNumber={prize}
        data={data}
        backgroundColors={["#3e3e3e","#df3428"]}
         textColors={["#DFDFDF"]}
        innerRadius={50}
        innerBorderColor='#808080'
        innerBorderWidth={5}
        outerBorderColor='#EEFF00'
        outerBorderWidth={8}
        textDistance={80}
        radiusLineColor='white'
        radiusLineWidth={0}
        startingOptionIndex={0}
        onStopSpinning={()=>{
    setWinnerShow(true)
  }}
  />
  </div>

  </div>
    )
  
}
export default BetWheel;