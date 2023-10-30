import { createSlice } from "@reduxjs/toolkit";
import {rouletteColor} from "../../util"




const initialState={
    roulette:[
        [3,2,1],
        [6,5,4],
        [9,8,7],
        [12,11,10],
        [15,14,13],
        [18,17,16],
        [21,20,19],
        [24,23,22],
        [27,26,25],
        [30,29,28],
        [33,32,31],
        [36,35,34]
      ],
}
export const RouletteSlice=createSlice({
    name:"roulette",
    initialState,
    reducers:{
        roulette:(state)=>state,
        
    }
})

export default RouletteSlice.reducer;