import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setStraightUp,deleteStraightUp } from '../../Store/BetSlice/straightUP/straightUpSlice'
import { setSplit, deleteSplit } from '../../Store/BetSlice/split/splitSlice'
import { splitOddSelector } from '../../Store/BetSlice/split/splitSelector'
import { straightUpOddSelector } from '../../Store/BetSlice/straightUP/straightUpSelector'
import Bet from '../Bet/bet'
import { colorClass } from '../../util'
import { rouletteSelector } from '../../Store/RouletteSlice/rouletteSelector'
import "./otherBox.scss"
const OtherBox = ({item,index,side,last,setBetOptions,toggleDisplay}) => {
  const roulette=useSelector(rouletteSelector)
  const dispatch=useDispatch()
  const splitOdd=useSelector(splitOddSelector)
  const straightUpOdd=useSelector(straightUpOddSelector)
  // const [displayBet,toggleDisplay]=useState(false)
  // const [betOptions,setBetOptions]=useState(null)

  const onLeftClick=(e)=>{
    let ar;

    if(!last){

      const i=index;
      if (side==="left"){
        ar=[item,roulette[i+1][0]]
      
      }
      else if(side==="right"){
        ar=[item,roulette[i+1][2]]
      }
      ar=ar.map(item=>item.toString())
      setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"split",dispatcher:setSplit,toggleDisplay:toggleDisplay,odd:splitOdd})
    toggleDisplay(true)
    }
    
  }
  const onCenterClick=(e)=>{
    const {value}=e.target
   
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:value,betType:"straight up",dispatcher:setStraightUp,toggleDisplay:toggleDisplay,odd:straightUpOdd})
    toggleDisplay(true)
  }
 
  return (
    <>
   
    <div className="other-box-container">
      
      <button className={colorClass(item)} onClick={onCenterClick} value={item}>
      {item}
      </button>
    <div className="left-border" onClick={onLeftClick}>
    </div>
    </div>
    </>
  )
}

export default OtherBox