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
                "backgroundColor": "#00FF19",
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
        <>
          <Wheel 
  mustStartSpinning={startSpin}
  spinDuration={2}
  prizeNumber={prize}
  data={data}
  backgroundColors={["#3e3e3e","#df3428"]}
  textColors={["#ffffff"]}

        innerRadius={4}
        innerBorderColor='#F0CEA0'
        innerBorderWidth={80}
  textDistance={80}
  outerBorderColor='white'

  radiusLineColor='white'
  radiusLineWidth={0}
  startingOptionIndex={0}
  onStopSpinning={()=>{
    setWinnerShow(true)
  }}
  />
  </>
    )
  
}
export default BetWheel;