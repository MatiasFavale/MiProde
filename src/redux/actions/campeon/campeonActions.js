import * as types from "../actionTypes";
import * as playersApi from "../../../api/playersApi";
import * as adminApi from "../../../api/adminApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";


export function changeChampionSuccess(campeon, seleccionado){
    debugger;
    var objectData = {campeon, seleccionado};
    return {type: types.CHANGE_CAMPEON, objectData};
}

export function saveChampionSuccess(campeon){
    debugger;
    return {type: types.SAVE_CAMPEON_SUCCESS, campeon};
}



export function changeChampion(campeon, seleccionado){
    debugger;
    return function(dispatch, getState){
        debugger;
        dispatch(changeChampionSuccess(campeon, seleccionado));
    }
}

export function saveChampion(userLogin, campeon){
    debugger;
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return adminApi.saveChampionTeam(userLogin, campeon)
        .then(champSave => {
            adminApi.saveChampionUser(userLogin, campeon)
            .then(champSave => {
                dispatch(saveChampionSuccess(campeon));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            })
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}