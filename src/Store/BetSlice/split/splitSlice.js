import { createSlice } from "@reduxjs/toolkit";

const initialState={

    odd:17,
    amounts:[],
    bets:[]
}

const splitSlice=createSlice({
    name:"split",
    initialState,
    reducers:{
        setSplit:(state,action)=>{
            const {payload:{bet,amount}}=action
            let indexAt;
            if(!JSON.stringify(state.bets).includes(JSON.stringify(bet))){
            state.bets.push(bet)
            state.amounts.push(amount)
            }
            else{

                state.bets=state.bets.filter((item,index)=>{

                    if(JSON.stringify(item).includes(JSON.stringify(bet))){
                        indexAt=index
                        return false
                    }
                    return true
                })
                state.amounts=state.amounts.filter((item,index)=>index!=indexAt)
                state.bets.push(bet)
                state.amounts.push(amount)

            }
            
        },
        deleteSplit:(state,action)=>{
            
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)

        },
        resetSplit:(state,action)=>initialState
    }
})

export const { setSplit, deleteSplit,resetSplit} = splitSlice.actions

export default splitSlice.reducer