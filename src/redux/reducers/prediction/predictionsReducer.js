import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function predictionReducer(state = initialState.predictions, action){
    switch (action.type){
        case types.GET_PREDICTION:
            return action.predictions;
        case types.CHANGE_MATCH_PREDICTION:
            return action.predictions;
        case types.LOAD_PREDICTION_SUCCESS:
            return action.predictions;
        default:
            return state;
    }
}