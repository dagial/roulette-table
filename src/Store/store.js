import { configureStore } from "@reduxjs/toolkit";
import rouletteSlice from "./RouletteSlice/rouletteSlice";
import rouletteReducer from "./RouletteSlice/rouletteSlice"
import straightUpReducer from "./BetSlice/straightUP/straightUpSlice";
import splitReducer from "./BetSlice/split/splitSlice"
import streetReducer from "./BetSlice/street/streetSlice"
import cornerReducer from "./BetSlice/corner/cornerSlice";
import doubleLineReducer from "./BetSlice/doubleLine/doubleLineSlice";
import topLineReducer from "./BetSlice/topLine/topLineSlice";
import twoToOneReducer from "./BetSlice/2to1/twoToOneSlice";
import oneToOneReducer from "./BetSlice/1to1/oneTooneSlice";
import winReducer from "./WinSlice/winSlice";
export const store=configureStore({
    reducer:{
        roulette:rouletteReducer,
        straightUp:straightUpReducer,
        split:splitReducer,
        street:streetReducer,
        corner:cornerReducer,
        doubleLine:doubleLineReducer,
        topLine:topLineReducer,
        twoToOne:twoToOneReducer,
        oneToOne:oneToOneReducer,
        wins:winReducer
    }
})