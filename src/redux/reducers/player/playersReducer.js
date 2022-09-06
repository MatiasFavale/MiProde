import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function playersReducer(state = initialState.players, action){
    debugger;
    switch (action.type){
        case types.LOAD_PLAYERS_SUCCESS:
            return action.players;
        case types.CHANGE_PlAYER:
            return action.players;
        case types.SAVE_GOALS_SUCCESS:
            return action.players;
        
        default:
            return state;
    }
}