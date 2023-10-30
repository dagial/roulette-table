import { createSelector } from "@reduxjs/toolkit"

export const dL=(state)=>{ 
    
    console.log("this run too")
    
    return state.doubleLine}

export const doubleLineOddSelector=createSelector([dL],(dL)=>{

    return dL.odd


})