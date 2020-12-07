import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;