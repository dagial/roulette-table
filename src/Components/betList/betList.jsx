import "./betList.scss"
import { useSelector } from "react-redux"
import { betSelector } from "../../Store/BetSlice/betSelector"
import BetTypeList from "../betListType/betListType"
const BetList=({startBetting})=>{

    const betList=useSelector(betSelector)

    return (
        <div className="betList-container">
            <div className="bets-title">Bets</div>
        {Object.keys(betList).length>0 &&<>
        
         {   
         Object.keys(betList).map((item)=>{
            const {bets,amounts,odd}=betList[item]
               return <BetTypeList startBetting={startBetting} name={item} bets={bets} amounts={amounts} odd={odd} key={item}/>

            }) 
            
            }</>
        }
        </div>
    )

}
export default BetList