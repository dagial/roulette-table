import SingleBet from "../SingleBet/singleBet"
import { deleteCorner } from "../../Store/BetSlice/corner/cornerSlice"
import { deleteDoubleLine } from "../../Store/BetSlice/doubleLine/doubleLineSlice"
import { deleteOneToOne } from "../../Store/BetSlice/1to1/oneTooneSlice"
import { deleteSplit } from "../../Store/BetSlice/split/splitSlice"
import { deleteStraightUp } from "../../Store/BetSlice/straightUP/straightUpSlice"
import { deleteStreet } from "../../Store/BetSlice/street/streetSlice"
import { deleteTopLine } from "../../Store/BetSlice/topLine/topLineSlice"
import { deleteTwoToOne } from "../../Store/BetSlice/2to1/twoToOneSlice"

const deleteMapper={
    oneToOne:deleteOneToOne,
    twoToOne:deleteTwoToOne,
    straightUp:deleteStraightUp,
    split:deleteSplit,
    street:deleteStreet,
    corner:deleteCorner,
    doubleLine:deleteDoubleLine,
    topLine:deleteTopLine,
}
const BetTypeList=({name,bets,amounts,odd,startBetting})=>{


    const deleteBet=deleteMapper[name]
return (
    <>
        <div className="bet-list-header">
            {name} ({odd}:1)
        </div>
        <div className="bet-list-bets">
        <div className="single-bet">
        <div className="bet">bet numbers</div>
        <div className="amount">amount</div>
        </div>
        { bets.map((item,index)=>{
      
        return <SingleBet bet={item} amount={amounts[index]} startBetting={startBetting} index={index} deleteBet={deleteBet} key={index}/>

        })}
        
        </div>

    </>
)


}
export default BetTypeList;