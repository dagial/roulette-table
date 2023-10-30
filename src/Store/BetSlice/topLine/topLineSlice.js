import { createSlice } from "@reduxjs/toolkit";


const initialState={
    odd:6,
    amounts:[],
    bets:[]
}

const topLineSlice=createSlice({
    name:"topLine",
    initialState,
    reducers:{
        setTopLine:(state,{payload:{amount,bet}})=>{
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
        deleteTopLine:(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetTopLine:(state,action)=>initialState
    }
})

export const {setTopLine,deleteTopLine,resetTopLine}=topLineSlice.actions;

export default  topLineSlice.reducer