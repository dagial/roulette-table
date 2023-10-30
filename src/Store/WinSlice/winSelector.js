import { createSelector } from "@reduxjs/toolkit"

const winSliceSelect=(state)=>state.wins
export const winSliceSelector=createSelector([winSliceSelect],(winner)=>{

    return winner.wins


})