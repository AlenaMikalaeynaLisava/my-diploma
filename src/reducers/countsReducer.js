import { REFRESH} from "../constants/counts";

const initialState = 0;
const reducer = (state = initialState, action)=>{ 
    switch(action.type){
        case REFRESH:
            return 0;    
        default:
            return state;
    }

}

export default reducer;