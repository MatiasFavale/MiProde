import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function rankingsReducer(state = initialState.rankings, action){
    switch (action.type){
        case types.LOAD_RANKING_SUCCESS:
            debugger;
            return action.rankings;
        default:
            return state;
    }
}