import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function activeGroupReducer(state = initialState.activegroup, action){
    switch (action.type){
        case types.CHANGE_ACTIVE_GROUP:            
            return action.activegroup;
        default:
            return state;
    }
}