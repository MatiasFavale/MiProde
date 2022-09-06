import * as types from "../actionTypes";
import * as teamsApi from "../../../api/teamsApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";


export function loadPosicionesTeamsSuccess(posicionesteams){
    return {type: types.LOAD_POSICIONES_TEAMS_SUCCESS, posicionesteams};
}

export function loadPosicionesTeams(userLogin){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return teamsApi.getTeams(userLogin)
        .then(teams => {
            dispatch(loadPosicionesTeamsSuccess(teams));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}