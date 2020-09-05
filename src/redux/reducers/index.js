import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducers = combineReducers({
    //key: value
    userReducer, //userReducer:userReducer
});

export { rootReducers };