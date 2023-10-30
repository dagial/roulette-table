import { createSlice } from "@reduxjs/toolkit";
const initialState={
    odd:8,
    amounts:[],
    bets:[]
}
const cornerSlice=createSlice({
    name:"corner",
    initialState,
    reducers:{
        setCorner:(state,{payload:{bet,amount}})=>{
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
        deleteCorner:(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetCorner:(state,action)=>initialState
    }
})

export const {setCorner,deleteCorner,resetCorner}=cornerSlice.actions

export default cornerSlice.reducer