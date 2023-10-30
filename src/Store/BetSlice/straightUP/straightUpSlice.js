import { createSlice } from "@reduxjs/toolkit";

const initialState={
    odd:35,
    amounts:[],
    bets:[]
}

const straightUpSlice=createSlice({
    name:"straightUp",
    initialState,
    reducers:{
        "setStraightUp":(state,action)=>{
            const {payload:{bet,amount}}=action
            let indexAt;
            if (!state.bets.includes(bet)){
                state.bets.push(bet);
                state.amounts.push(amount)    
            }
            else{

                state.bets=state.bets.filter((item,index)=>{

                    if(item==bet){
                        indexAt=index;
                        return false
                    }
                    return true
                })
                state.amounts=state.amounts.filter((item,index)=>index!=indexAt)
                state.bets.push(bet)
                state.amounts.push(amount)
            }
        },
        "deleteStraightUp":(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetStraightUp:(state,action)=>initialState

    }
})

export const { setStraightUp, deleteStraightUp, resetStraightUp }=straightUpSlice.actions;

export default straightUpSlice.reducer;