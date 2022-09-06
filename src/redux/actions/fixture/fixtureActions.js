import * as types from "../actionTypes";
import * as matchesApi from "../../../api/matchesApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";



export function loadMatchesSuccess(matches){
    return {type: types.LOAD_MATCHES_SUCCESS, matches};
}

export function changeMatchPrediction(matches, predictions){
    return {type: types.CHANGE_MATCH_PREDICTION, matches, predictions};
}
export function changeResultsMatch(matches){
    return {type: types.CHANGE_RESULTS_MATCH, matches};
}

export function changeActiveGroup(activegroup){
    return {type: types.CHANGE_ACTIVE_GROUP, activegroup};
}



export function loadMatches(userLogin, sFase){
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return matchesApi.getMatches(userLogin, sFase)
        .then(matches => {
            dispatch(loadMatchesSuccess(matches));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function changeMatch(match, matches, predictions){
    debugger;
    matches.filter(nfilter=>nfilter.code === match.code)[0].PrediccionTeamOne = match.PrediccionTeamOne;
    matches.filter(nfilter=>nfilter.code === match.code)[0].PrediccionTeamTwo = match.PrediccionTeamTwo;
    matches.filter(nfilter=>nfilter.code === match.code)[0].change = "1";
    return function(dispatch, getState){
        debugger;
        dispatch(changeMatchPrediction(matches, predictions));
    }
}

export function changeResultMatch(match, matches){
    matches.filter(nfilter=>nfilter.code === match.code)[0].change = "1";
    return function(dispatch, getState){
        debugger;
        dispatch(changeResultsMatch(matches));
    }
}

export function changeGroup(activegroup){
    return function(dispatch, getState){
        debugger;
        dispatch(changeActiveGroup(activegroup));
    }
}



