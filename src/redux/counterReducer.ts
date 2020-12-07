import { Action } from "redux";
import { DECREMENT, INCREMENT } from "./const";
import { CounterAction } from "./types";

const initialState = {
    counter: 0
}
const counterReducer = (state=initialState, action:CounterAction) => {
    switch(action.type) {
        case INCREMENT:{
            state = {...state, counter:state.counter + action.value}
            return state;
        }
        case DECREMENT: {
            state = {...state, counter:state.counter - action.value}
            return state;
        }
        default:
            return state;

    }
}

export default counterReducer;