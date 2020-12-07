import { DECREMENT, INCREMENT, SIG_IN } from "./const";
import { DecrementAction, IncrementAction, LoggedAction } from "./types";

export const increment = (value:number):IncrementAction => {
    return {
        type: INCREMENT,
        value: value
    }
}

export const decrement = (value:number):DecrementAction => {
    return {
        type: DECREMENT,
        value: value
    }
}

export const login = ():LoggedAction => {
    return {
        type: SIG_IN
    }
}