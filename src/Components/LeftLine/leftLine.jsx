import "./LeftLine.scss"
import { useSelector } from "react-redux"
import { setTwoToOne } from "../../Store/BetSlice/2to1/twoToOneSlice"
import { twoToOneOddSelector } from "../../Store/BetSlice/2to1/twoToOneSelector"

const LeftLine = ({setBetOptions,toggleDisplay}) => {
  const twoToOneOdd=useSelector(twoToOneOddSelector)
  const twoToOneHandle=(e)=>{
    const {value}=e.currentTarget
    console.log(e.target.value)

setBetOptions({xy:{x:e.pageX,y:e.pageY},list:value,betType:"two to one",dispatcher:setTwoToOne,toggleDisplay:toggleDisplay,odd:twoToOneOdd})
toggleDisplay(true)

}
  return (
    <div className="leftline-container">
        <div className="leftline-item">
          <button type="button" value="row-1" onClick={twoToOneHandle} className="leftline-content" >2 to 1</button>
           
        </div>
        <div className="leftline-item">
       
        <button className="leftline-content" type="button" value="row-2" onClick={twoToOneHandle}>2 to 1</button>
        </div>
        <div className="leftline-item">
        <button className="leftline-content" type="button" value="row-3" onClick={twoToOneHandle}>2 to 1</button>
        </div>
    </div>
  )
}

export default LeftLine