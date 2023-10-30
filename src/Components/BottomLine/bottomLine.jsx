import "./bottomLine.scss"
import {useState} from "react"
import { useSelector } from "react-redux"
import { setTwoToOne } from "../../Store/BetSlice/2to1/twoToOneSlice"
import { twoToOneOddSelector } from "../../Store/BetSlice/2to1/twoToOneSelector"
import { oneToOneOddSelector } from "../../Store/BetSlice/1to1/oneToOneSelector"
import { setOneToOne } from "../../Store/BetSlice/1to1/oneTooneSlice"

const BottomLine = ({toggleDisplay,setBetOptions}) => {
    const twoToOneOdd=useSelector(twoToOneOddSelector)
    const oneToOneOdd=useSelector(oneToOneOddSelector)
    const twoToOneHandler=(e)=>{
        const {value}=e.target
   
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:value,betType:"two to one",dispatcher:setTwoToOne,toggleDisplay:toggleDisplay,odd:twoToOneOdd})
    toggleDisplay(true)

    }
    const oneToOneHandler=(e)=>{
        const {value}=e.target
   
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:value,betType:"one to one",dispatcher:setOneToOne,toggleDisplay:toggleDisplay,odd:oneToOneOdd})
    toggleDisplay(true)

    }


  return (
    <div className="bottom-line-container">
        <div className="bottom-line-first-row">
        <div className="bottom-line-item">
    <button className="bottom-line-content" value="25-36" onClick={twoToOneHandler}> 3rd 12</button>

        </div>
        <div className="bottom-line-item">
            <button className="bottom-line-content" value="13-24" onClick={twoToOneHandler}>2nd 12</button>
            </div>
        <div className="bottom-line-item">
            <button type="type" className="bottom-line-content" value="1-12" onClick={twoToOneHandler}>1st 12</button>
        </div>
        
        
        </div>
        <div className="bottom-line-second-row">
            <div className="second-row-item">
            <button type="button" className="second-row-content" value="19-36" onClick={oneToOneHandler}>
                19 to 36
            </button>
            </div>
            <div className="second-row-item">
            <button type="button" className="second-row-content" value="even" onClick={oneToOneHandler}>
                Even
            </button>
            </div>
            <div className="second-row-item">
            <button type="button" className="second-row-shape black" value="black" onClick={oneToOneHandler}>
          
            </button>
            </div>
            <div className="second-row-item">
            <button type="button" className="second-row-shape red" value="red" onClick={oneToOneHandler}>
               
            </button>
            </div>
            <div className="second-row-item">
            <button type="button" className="second-row-content" value="odd" onClick={oneToOneHandler}>
                Odd
            </button>
            </div>
            <div className="second-row-item">
            <button type="button" className="second-row-content" value="1-18" onClick={oneToOneHandler}>
                1 to 18
            </button>
            </div>
        </div>
    </div>
  )
}

export default BottomLine