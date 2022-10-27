import * as types from "../actionTypes";
import * as predictionsApi from "../../../api/predictionsApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";

export function CreatePredictionSuccess(matches,predictions){
    
    return {type: types.CREATE_PREDICTION_SUCCESS, matches,predictions};
}

export function loadPredictionSuccess(predictions){
    
    return {type: types.LOAD_PREDICTION_SUCCESS, predictions};
}

export function savePrediction(user, match, matches,predictions){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return predictionsApi.savePrediction(user,match)
        .then(savedPrediction => {
            
            dispatch(CreatePredictionSuccess(matches,predictions));
            /*
            course.id
            ? dispatch(updateCourseSuccess(savedPrediction))
            : dispatch(createCourseSuccess(savedPrediction));
            */
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function loadPrediction(userLogin){
    return function(dispatch){
        dispatch(beginApiCall());
        return predictionsApi.getProdes(userLogin)
        .then(prediction => {
            dispatch(loadPredictionSuccess(prediction));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

