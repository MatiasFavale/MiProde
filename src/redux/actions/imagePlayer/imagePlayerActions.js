import * as types from "../actionTypes";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";



export function changeImagesPlayers(imagePlayers){
    return {type: types.CHANGE_IMAGES_PLAYERS, imagePlayers};
}


export function changeImage(imagePlayers){
    matches.filter(nfilter=>nfilter.code === match.code)[0].change = "1";
    return function(dispatch, getState){
        debugger;
        dispatch(changeImagesPlayers(matches));
    }
}
