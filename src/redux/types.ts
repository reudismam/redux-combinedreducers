import { Action } from "redux";
import { increment } from "./action";

export interface IncrementAction extends Action {
    value: number;
}

export interface DecrementAction extends Action {
    value: number;
}

export interface LoggedAction extends Action {
}

export interface CounterState {
    counter: number;
}

export interface LoggedState {
    logged: boolean;
}

export interface AppState {
    counter: CounterState;
    isLogged: LoggedState;
}



export type CounterAction = IncrementAction;