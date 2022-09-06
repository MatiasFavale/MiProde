import * as types from "../actionTypes";
import * as playersApi from "../../../api/playersApi";
import * as adminApi from "../../../api/adminApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";



export function loadPlayersSuccess(players){
    return {type: types.LOAD_PLAYERS_SUCCESS, players};
}

export function changePlayerSuccess(players){
    return {type: types.CHANGE_PlAYER, players};
}

export function saveGoalsSuccess(players){
    return {type: types.SAVE_GOALS_SUCCESS, players};
}

export function loadPlayers(userLogin){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return playersApi.getPlayers(userLogin)
        .then(matches => {
            dispatch(loadPlayersSuccess(matches));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function changePlayer(player, players){
    debugger;
    return function(dispatch, getState){
        debugger;
        dispatch(changePlayerSuccess(players));
    }
}

export function saveGoals(userLogin, player,players){
    debugger;
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return adminApi.saveGoalsPlayer(userLogin, player)
        .then(playerSave => {
            dispatch(saveGoalsSuccess(players));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}



