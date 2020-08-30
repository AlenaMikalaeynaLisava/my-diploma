import { combineReducers } from "redux";
import reducerFirst from "./countsReducer";
import show from "./showsReducer";

const rootReducer = combineReducers({
    output: reducerFirst,
    show: show,
});
export default rootReducer;