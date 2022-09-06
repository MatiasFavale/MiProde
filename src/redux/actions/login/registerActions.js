import * as types from "../actionTypes";
import * as registerApi from "../../../api/registerApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";

export function createUser(user){
    return {type:types.CREATE_USER, user}
}

export function createUserSuccess(user){
    return {type: types.CREATE_USER_SUCCESS, user};
}

export function loginUserSuccess(userLogin){
    debugger;
    return {type: types.LOGIN_USER_SUCCESS, userLogin};
}

export function loadLoginLocalStSuccess(userLogin){
    debugger;
    return {type: types.LOAD_LOGIN_LOCALST_SUCCESS, userLogin};
}

export function saveRegister(register){
    return function(dispatch, getState){
        debugger;
        dispatch(beginApiCall());
        return registerApi.postUser(register)
        .then(savedRegister => {
            dispatch(createUserSuccess(savedRegister));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function saveRegisterCode(register){
    return function(dispatch, getState){
        debugger;
        dispatch(beginApiCall());
        return registerApi.postUserCode(register)
        .then(savedRegister => {
            dispatch(loginUserSuccess(savedRegister));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}


export function loginUser ( user ){
    return function(dispatch, getState){
        debugger;
        dispatch(beginApiCall());
        return registerApi.loginUser(user)
        .then(logUser => {
            dispatch(loginUserSuccess(logUser));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function loadLoginLocalSt ( user ){
    return function(dispatch, getState){
        debugger;
        dispatch(loadLoginLocalStSuccess(user));
    }
}