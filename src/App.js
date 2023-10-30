import './App.scss';
import BetTable from './Components/BetTable/betTable';
import React from 'react'
import WinList from './Components/WinCheck/winCheck';
import BetWheel from './Components/wheel/wheel';
import BetList from './Components/betList/betList';
import BetCountDown from './Components/CountDown/countDown';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { resetCorner } from "./Store/BetSlice/corner/cornerSlice"
import { resetDoubleLine } from "./Store/BetSlice/doubleLine/doubleLineSlice"
import { resetOneToOne } from "./Store/BetSlice/1to1/oneTooneSlice"
import { resetSplit } from "./Store/BetSlice/split/splitSlice"
import { resetStraightUp } from "./Store/BetSlice/straightUP/straightUpSlice"
import { resetStreet } from "./Store/BetSlice/street/streetSlice"
import { resetTwoToOne } from "./Store/BetSlice/2to1/twoToOneSlice"
import { resetTopLine } from "./Store/BetSlice/topLine/topLineSlice"
import { resetWin } from "./Store/WinSlice/winSlice"
import { reset } from './util';

const App = () => {
  const dispatch=useDispatch()
  const wheelPropsInitial={prizeNum:0,startSpin:false}
 const [startBetting,setStartBetting]=useState(false)
  const [startCountDown,setStartCountDown]=useState(false)
 const [wheelProps,setWheelProps]=useState(wheelPropsInitial)
 const [winnerShow,setWinnerShow]=useState(false)

  return (
    <div className="App" id="app">
      <div className="roulette-wheel-container">
      <BetWheel wheelProps={wheelProps}  setWinnerShow={setWinnerShow}/>
      </div>
      <div className="data-display">
      <div className="bet-list-container">
        {winnerShow && <WinList prizeNumber={wheelProps.prizeNum} />}
        </div>
        <div className="data">
        {!winnerShow &&<button onClick={()=>{
          setStartBetting(true)
          setStartCountDown(true)
          }} className="button">Bet</button>}
    
          
        {winnerShow && 
        <button onClick={()=>
        {
          setStartBetting(false)
        setWinnerShow(false)
        setStartCountDown(false)
        setWheelProps(wheelPropsInitial)
        reset(dispatch)
      }} 
        className="button "
        >Reset</button>}
        {wheelProps.startSpin && !winnerShow &&<div className="time-count">Drawing...</div>}
      {startCountDown && !winnerShow && !wheelProps.startSpin && <BetCountDown setWheelProps={setWheelProps} setStartBetting={setStartBetting}/>}
      </div>
      
      </div>
      <div className="bet-table-container">
      <BetTable startBetting={startBetting}/>
      </div>
      <div className="bet-buttons">
      <div className="bet-list-container">
        <BetList startBetting={startBetting}/>
        </div>
      </div>
  
    </div>
    
  )
}

export default App
