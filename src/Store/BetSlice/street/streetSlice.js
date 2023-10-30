import { createSlice } from "@reduxjs/toolkit";

const initialState={
    odd:11,
    amounts:[],
    bets:[]
}

const streetSlice=createSlice({
    name:"street",
    initialState,
    reducers:{
        setStreet:(state,{payload:{amount,bet}})=>{
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
        deleteStreet:(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetStreet:(state,action)=>initialState
    }
})

export const {setStreet,deleteStreet,resetStreet}=streetSlice.actions;

export default  streetSlice.reducer