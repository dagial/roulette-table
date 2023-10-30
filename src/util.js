import { useSelector } from "react-redux"
import { resetCorner } from "./Store/BetSlice/corner/cornerSlice"
import { resetDoubleLine } from "./Store/BetSlice/doubleLine/doubleLineSlice"
import { resetOneToOne } from "./Store/BetSlice/1to1/oneTooneSlice"
import { resetSplit } from "./Store/BetSlice/split/splitSlice"
import { resetStraightUp } from "./Store/BetSlice/straightUP/straightUpSlice"
import { resetStreet } from "./Store/BetSlice/street/streetSlice"
import { resetTwoToOne } from "./Store/BetSlice/2to1/twoToOneSlice"
import { resetTopLine } from "./Store/BetSlice/topLine/topLineSlice"
import { resetWin } from "./Store/WinSlice/winSlice"
export const colorClass=(number)=>{

    if(number>=1 && number<=10 ){
        if (number%2==0){
          
            return "content black"
        }
        else{
            return "content red"
        }
    }
    else if (number>=19 && number <=28){
        if (number%2==0){
      
            return "content black"
        }
        else{
            return "content red"
        }

    }
    else if (number>=11 && number<=18 ){

        if (number%2==0){
            return "content red"
        }
        else{
            return "content black"
        }

    }
    else if(number>=29 && number <=36){
        if (number%2==0){
            return "content red"
        }
        else{
            return "content black"
        }

    }
}
export const switchMatch=(number,string)=>{

        const lst=[
            [3,6,9,12,15,18,21,24,27,30,33,36],
            [2,5,8,11,14,17,20,23,26,29,32,35],
            [1,4,7,10,13,16,19,22,25,28,31,34]
        ]
        switch(string){
            case "25-36":
                if(number>=25 && number<=36)return true;
                return false;
            case "13-24":
                if(number>=13 && number<=24)return true;
                return false;
            case "1-12":
                if(number>=1 && number<=24)return true;
                return false;
            case "1-18":
                if (number>=1 && number<=18)return true;
                return false;
            case "19-36":
                if (number>=19 && number<=36)return true;
                return false;
            case "even":
                if (number%2==0)return true;
                return false;
            case "odd":
                if (number %2==1)return true;
                return false;
            case "black":
                if(number>=1 && number<=10 && number %2==0  )return true;
                else if (number>=19 && number <=28 && number%2==0)return true;
                else if (number>=11 && number<=18 && number%2==1)return true;
                else if(number>=29 && number <=36 && number%2==1)return true;
                return false;
            case "red":
                if(number>=1 && number<=10 && number %2==1  )return true;
                else if (number>=19 && number <=28 && number%2==1)return true;
                else if (number>=11 && number<=18 && number%2==0)return true;
                else if(number>=29 && number <=36 && number%2==0)return true;
                return false;

            case "row-1":
                if(lst[0].includes(number))return true;
                return false;
            case "row-2":
                if(lst[1].includes(number))return true;
                return false;
            case "row-3":
                if(lst[2].includes(number))return true;
                return false;


            default:{

            }

        }

}

export const rouletteColor=(number)=>{

    if(number>=1 && number<=10 ){
        if (number%2==0){
          
            return {option:number.toString(),style:{backgroundColor:"black",textColor:'white'}}
        }
        else{
            return {option:number.toString(),style:{backgroundColor:"red",textColor:'white'}}
        }
    }
    else if (number>=19 && number <=28){
        if (number%2==0){
      
            return {option:number.toString(),style:{backgroundColor:"black",textColor:'white'}}
        }
        else{
            return {option:number.toString(),style:{backgroundColor:"red",textColor:'white'}}
        }

    }
    else if (number>=11 && number<=18 ){

        if (number%2==0){
            return {option:number.toString(),style:{backgroundColor:"red",textColor:'white'}}
        }
        else{
            return {option:number.toString(),style:{backgroundColor:"black",textColor:'white'}}
        }

    }
    else if(number>=29 && number <=36){
        if (number%2==0){
            return {option:number.toString(),style:{backgroundColor:"red",textColor:'white'}}
        }
        else{
            return {option:number.toString(),style:{backgroundColor:"black",textColor:'white'}}
        }

    }
}

export const reset=(dispatch)=>{

    dispatch(resetCorner())
    dispatch(resetDoubleLine())
    dispatch(resetOneToOne())
    dispatch(resetSplit())
    dispatch(resetStreet())
    dispatch(resetStraightUp())
    dispatch(resetTopLine())
    dispatch(resetTwoToOne())
    dispatch(resetWin())

}