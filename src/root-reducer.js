import { combineReducers } from "redux";
import { molesReducer } from "./moles/reducers";

export const actions = {
    
}
export const rootReducer = combineReducers({
  moles: molesReducer,
});