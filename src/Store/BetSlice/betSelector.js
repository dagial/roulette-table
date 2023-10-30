import { createSelector } from "@reduxjs/toolkit"
export const oneToOneBet=(state)=>state.oneToOne
export const twoToOneSelector=(state)=>state.twoToOne
export const straightUpSelector=(state)=>state.straightUp
export const splitSelector=(state)=>state.split
export const cornerSelector=(state)=>state.corner
export const doubleLineSelector=(state)=>state.doubleLine
export const streetSelector=(state)=>state.street
export const topLineSelector=(state)=>state.topLine

export const betS=(state)=>{

    let {roulette,wins,...bets}=state
//     for (let betType in bets){
//  
//         if (bets[betType].bets.length==0){
//             delete bets[betType]
//          
//         }
//     }

    return bets
}

export const betSelector=createSelector([betS],(bets)=>{

    for (let betType in bets){
 
        if (bets[betType].bets.length==0){
            delete bets[betType]
         
        }
    }
return bets;
})