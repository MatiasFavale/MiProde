import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function matchesReducer(state = initialState.matches, action){
    switch (action.type){
        case types.LOAD_MATCHES_SUCCESS:
            return action.matches;
        case types.CHANGE_MATCH_PREDICTION:
            return action.matches;
        case types.CREATE_PREDICTION_SUCCESS:
            return state;
        case types.CHANGE_RESULTS_MATCH:
            return action.matches;
        case types.CREATE_RESULTADOS_SUCCESS:
            return action.matches;
        case types.MATCH_DISABLED_SUCCESS:
            return action.matches;
        case types.LOAD_SAVEPOINTS_USER_SUCCESS:
            return action.matches;
        default:
            return state;
    }
}