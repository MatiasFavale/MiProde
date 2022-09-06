import * as types from "../actionTypes";
import * as rankingApi from "../../../api/rankingApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";


export function loadRankingSuccess(rankings){
    return {type: types.LOAD_RANKING_SUCCESS, rankings};
}

export function loadRanking(userLogin){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return rankingApi.getRanking(userLogin)
        .then(ranks => {
            dispatch(loadRankingSuccess(ranks));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}