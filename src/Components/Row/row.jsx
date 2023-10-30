import React from 'react'
import "./row.scss"
import CenterBox from '../CenterBox/centerBox';
import OtherBox from '../OtherBox/otherBox';
import { useSelector } from 'react-redux';
import { rouletteSelector } from '../../Store/RouletteSlice/rouletteSelector';
import { setStreet } from '../../Store/BetSlice/street/streetSlice';
import { streetOddSelector } from '../../Store/BetSlice/street/streetSelector';
import { doubleLineOddSelector } from '../../Store/BetSlice/doubleLine/doubleLineSelector';
import { setDoubleLine } from '../../Store/BetSlice/doubleLine/doubleLineSlice';
const Row = ({row,index,last ,setBetOptions,toggleDisplay}) => {
  const [left,center,right]=row
  const roulette=useSelector(rouletteSelector)
  const streetOdd=useSelector(streetOddSelector)
  const doubleLineOdd=useSelector(doubleLineOddSelector)
  const onRowClick=(e)=>{
    console.log(index,row)
    row=row.map(item=>item.toString())
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:row,betType:"street",dispatcher:setStreet,toggleDisplay:toggleDisplay,odd:streetOdd})
    toggleDisplay(true)
  }
  const onDbCornerClick=(e)=>{
    const i =index
    let ar= row.concat(roulette[i+1])
    ar=ar.map(item=>parseInt(item))
    setBetOptions({xy:{x:e.pageX,y:e.pageY},list:ar,betType:"double Line",dispatcher:setDoubleLine,toggleDisplay:toggleDisplay,odd:doubleLineOdd})
    toggleDisplay(true)
  }
  return (
    <div className="row-container">
         <span><OtherBox item={left} side="left" index={index} last={last} setBetOptions={setBetOptions} toggleDisplay={toggleDisplay}/></span>
      <CenterBox row={row} index={index} last={last} setBetOptions={setBetOptions} toggleDisplay={toggleDisplay}/>
      <span><OtherBox item={right} index={index} side="right" last={last} setBetOptions={setBetOptions} toggleDisplay={toggleDisplay}/></span>
      <div className="row-bottom-border" onClick={onRowClick}>
      </div>
      {!last && <div className="row-db-corner" onClick={onDbCornerClick}>

      </div>}
    </div>
  )
}

export default Row