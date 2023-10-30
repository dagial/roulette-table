import { createSlice } from "@reduxjs/toolkit"
const initialState={
    odd:2,
    amounts:[],
    bets:[]
}

const twoToOneSlice=createSlice({
    name:"twoToOne",
    initialState,
    reducers:{
        setTwoToOne:(state,{payload:{amount,bet}})=>{
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
        deleteTwoToOne:(state,action)=>{
            state.bets=state.bets.filter((item,index)=>index!==action.payload)
            state.amounts=state.amounts.filter((item,index)=>index!==action.payload)
        },
        resetTwoToOne:(state,action)=>initialState
    }
})

export const {setTwoToOne,deleteTwoToOne,resetTwoToOne}=twoToOneSlice.actions;

export default  twoToOneSlice.reducer