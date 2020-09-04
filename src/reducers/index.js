import { combineReducers } from "redux";
import show from "./showsReducer";

const rootReducer = combineReducers({
    show: show,
});
export default rootReducer;