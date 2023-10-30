import { createSelector } from "@reduxjs/toolkit"

export const cornerSelector=(state)=>state.corner
export const cornerOddSelector=createSelector([cornerSelector],(cs)=>cs.odd)