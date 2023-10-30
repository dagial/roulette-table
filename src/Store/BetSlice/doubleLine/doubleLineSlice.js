import { createSlice } from "@reduxjs/toolkit";

const initialState={
    odd:5,
    amounts:[],
    bets:[]
}

const doubleLineSlice=createSlice({
    name:"doubleLine",
    initialState,
    reducers:{
        setDoubleLine:(state,{payload:{amount,bet}})=>{
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
        deleteDoubleLine:(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetDoubleLine:()=>initialState
            
    }
})

export const {setDoubleLine,deleteDoubleLine,resetDoubleLine}=doubleLineSlice.actions;

export default doubleLineSlice.reducer