import * as types from "../actionTypes";
import * as teamsApi from "../../../api/teamsApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";



export function loadTeamsSuccess(teams){
    return {type: types.LOAD_TEAMS_SUCCESS, teams};
}


export function loadTeams(userLogin){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return teamsApi.getTeams(userLogin)
        .then(teams => {
            dispatch(loadTeamsSuccess(teams));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}