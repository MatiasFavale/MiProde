import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function pointsReducer(state = initialState.points, action){
    debugger;
    switch (action.type){
        case types.LOAD_POINT_SUCCESS:
            return action.points;
        case types.CREATE_POINT_SUCCESS:
            return state;
        case types.CHANGE_POINT_DISPLAY:   
        debugger;           
               var updatePoints = {
                [action.objectData.Cambios.name]: action.objectData.Cambios.value
              }
              
            var aPoints =  {...action.objectData.Points[0], ...updatePoints}

            return [aPoints];
        case types.SAVE_POINTS_ENABLE:
            return state;
        default:
            return state;
    }
}