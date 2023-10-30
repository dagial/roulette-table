import {useState} from "react"
import { useSelector } from "react-redux"
import { rouletteSelector } from "../../Store/RouletteSlice/rouletteSelector"
import TopLine from "../TopLine/topLine"
import BottomLine from "../BottomLine/bottomLine"
import LeftLine from "../LeftLine/leftLine"
import Row from "../Row/row"
import Bet from "../Bet/bet"
import "./betTable.scss"

const BetTable = ({startBetting}) => {
    const roulette=useSelector(rouletteSelector)
    const [betParameters,setBetParameters]=useState(null)
    const [toggleBet,setToggleBet]=useState(false)
  return (
    <div className={startBetting?"bet-table-container":"bet-table-container opt"}>
      {startBetting &&betParameters&& toggleBet &&<Bet options={startBetting?betParameters:null}/>}
        <div className="closer-div"></div>
          <div className="top-bet-table">
      <TopLine setBetOptions={setBetParameters} toggleDisplay={setToggleBet}/>
    {roulette.map((item,index)=>{

      return <div className="row-div" key={index}>
        <Row row={item} index={index} last={index===roulette.length-1 ?true:false} 
          setBetOptions={setBetParameters} 
          toggleDisplay={setToggleBet}/>
      
      </div>

    })}
  <LeftLine setBetOptions={setBetParameters} toggleDisplay={setToggleBet}/>
    </div>
    <div className="bottom-bet-table">
      <BottomLine setBetOptions={setBetParameters} toggleDisplay={setToggleBet}/>
      </div>
    </div>
  )
}

export default BetTable