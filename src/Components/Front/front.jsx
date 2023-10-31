import React from 'react'
import "./front.scss"
const Front = () => {
  return (
    <div className="front-container">
    <div className="front-header">
        Play Roulette Online 
    <small className="small">played the same way as a table roulette</small>
    <button className="nav-btn">
    <a href="#table">
        Play Game
        </a>
    </button>
    
    </div>
    {/* <div className="rules-roulette">
        <li className="rule-item">The game follows the same rules as American Roulette</li>
        <li className="rule-item">To place a bet click on any location that is allowed by the roulette table</li>
    </div> */}
    </div>
  )
}

export default Front