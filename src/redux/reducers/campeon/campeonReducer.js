import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function campeonReducer(state = initialState.campeon, action){
    debugger;
    switch (action.type){
        case types.CHANGE_CAMPEON:
            //action.objectData.campeon.code = action.objectData.seleccionado;
            var ojectData = {code: action.objectData.seleccionado};
            return ojectData;
        default:
            return state;
    }
}