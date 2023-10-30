import { createSlice } from "@reduxjs/toolkit";

const initialState={
    wins:{}
}
const winSlice=createSlice({
    name:"winner",
    initialState,
    reducers:{
        addWin:(state,action)=>{
            const {winBets,odd,winAmounts,name}=action.payload;
            state.wins[name]={winBets,odd,winAmounts}
        },
        resetWin:(state,action)=>initialState
    }
})

export const {addWin,resetWin}=winSlice.actions
export default winSlice.reducer