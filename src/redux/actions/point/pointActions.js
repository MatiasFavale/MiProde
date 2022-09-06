import * as types from "../actionTypes";
import * as pointsApi from "../../../api/pointsApi";
import * as adminApi from "../../../api/adminApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";

export function CreatePointSuccess(players,points){
    debugger;
    return {type: types.CREATE_POINT_SUCCESS, players,points};
}

export function loadPointSuccess(points){
    debugger;
    return {type: types.LOAD_POINT_SUCCESS, points};
}

export function changePointDisplay(points,name, value){
    debugger;
    //points[0][name] = value;
    var pointChange = {"name":name,"value": value};
    var objectData = {Points:points, Cambios:pointChange};
    return {type: types.CHANGE_POINT_DISPLAY, objectData};
}

export function savePointsEnableSuccess(savePoint){
    return {type: types.SAVE_POINTS_ENABLE, savePoint};
}





export function savePoint(user, point, isPlayerSelect, players,points){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return pointsApi.savePoints(user,point, isPlayerSelect)
        .then(savedPoint => {
            debugger;
            dispatch(CreatePointSuccess(players,points));
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

export function loadPoint(userLogin){
    return function(dispatch){
        dispatch(beginApiCall());
        return pointsApi.getPointsProde(userLogin)
        .then(point => {
            dispatch(loadPointSuccess(point));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function changePoint (points, name, value ){
    
    return function(dispatch, getState){
        debugger;
        dispatch(changePointDisplay(points,name, value));
    }
}

export function savePointsEnable(userLogin){
    debugger;
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return adminApi.savePointsEnable(userLogin)
        .then(pointSave => {
            dispatch(savePointsEnableSuccess(pointSave));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}