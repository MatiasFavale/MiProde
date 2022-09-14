import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function loginReducer(state = initialState.userLogin, action){
    debugger;
    switch (action.type){
        case types.CREATE_USER_SUCCESS:
            return action.user;// [...state, { ...action.userLogin}];
        case types.LOGIN_USER_SUCCESS:
            return action.userLogin;
        case types.LOAD_LOGIN_LOCALST_SUCCESS:
            return action.userLogin;
        default:
            return state;
    }
}