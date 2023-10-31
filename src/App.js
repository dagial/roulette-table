import './App.scss';
import BetTable from './Components/BetTable/betTable';
import React from 'react'
import WinList from './Components/WinCheck/winCheck';
import BetWheel from './Components/wheel/wheel';
import BetList from './Components/betList/betList';
import BetCountDown from './Components/CountDown/countDown';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
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
      <div className="border">
      <div className="app-table">
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
      <BetTable startBetting={true}/>
      </div>
      <div className="bet-buttons">
      <div className="bet-list-container">
        <BetList startBetting={startBetting}/>
        </div>
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default App
