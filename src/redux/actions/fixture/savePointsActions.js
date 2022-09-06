import * as types from "../actionTypes";
import * as adminApi from "../../../api/adminApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";


export function loadSavePointsUserSuccess(matches){
    return {type: types.LOAD_SAVEPOINTS_USER_SUCCESS, matches};
}

export function loadSavePointsUser(userLogin, match, matches){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return adminApi.savePointsUser(userLogin, match)
        .then(savePoints => {
            adminApi.saveRunUpdateMatch(userLogin, match)
            .then(savePoints => {
                dispatch(loadSavePointsUserSuccess(matches));
            })
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}