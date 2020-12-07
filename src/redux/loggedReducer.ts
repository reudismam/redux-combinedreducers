import { Action } from "redux";
import { SIG_IN } from "./const";
import { LoggedAction, LoggedState } from "./types";

const initialState = {
    logged: false
}

const loggedReducer = (state=initialState, action:LoggedAction) => {
    switch(action.type) {
        case SIG_IN:
            state = {...state, logged:!state.logged};
            return state;
        default:
            return state;
    }
}

export default loggedReducer;