import React from 'react'
import {MdRemoveCircle} from "react-icons/md"
import { useDispatch } from 'react-redux'
const SingleBet = ({bet,amount,index,deleteBet,startBetting}) => {
    const dispatch=useDispatch()
  return (
    <div className="single-bet">
        <div className="bet">{Array.isArray(bet) ? bet.map((item,index)=>{
            if(index!=bet.length-1) return index==0?`${item},`: ` ${item},`
            return ` ${item}`
           
        }):bet}</div>
        <div className="amount">{amount}$</div>
        {startBetting && <MdRemoveCircle className="remove-icon" onClick={()=>dispatch(deleteBet(index))}/>}
        </div>
  )
}

export default SingleBet