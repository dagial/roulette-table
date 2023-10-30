import { createSlice } from "@reduxjs/toolkit"
const initialState={
    odd:1,
    amounts:[],
    bets:[]
}

const oneToOneSlice=createSlice({
    name:"oneToOne",
    initialState,
    reducers:{
        setOneToOne:(state,{payload:{amount,bet}})=>{
            let indexAt;
            if(!state.bets.includes(bet)){
                state.bets.push(bet)
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
        deleteOneToOne:(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetOneToOne:(state,action)=>initialState

    }
})

export const {setOneToOne,deleteOneToOne,resetOneToOne}=oneToOneSlice.actions;

export default  oneToOneSlice.reducer