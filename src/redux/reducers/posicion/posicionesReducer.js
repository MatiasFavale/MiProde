import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function posicionesReducer(state = initialState.posicionesteams, action){
    switch (action.type){
        case types.LOAD_POSICIONES_TEAMS_SUCCESS:
            
            var objectGroups = {
                "GrupoA": action.posicionesteams.filter(nfilter=>nfilter.group === "A")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoB": action.posicionesteams.filter(nfilter=>nfilter.group === "B")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoC": action.posicionesteams.filter(nfilter=>nfilter.group === "C")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoD": action.posicionesteams.filter(nfilter=>nfilter.group === "D")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoE": action.posicionesteams.filter(nfilter=>nfilter.group === "E")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoF": action.posicionesteams.filter(nfilter=>nfilter.group === "F")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoG": action.posicionesteams.filter(nfilter=>nfilter.group === "G")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoH": action.posicionesteams.filter(nfilter=>nfilter.group === "H")
                    .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference)
            }
            debugger;
            action.posicionesteams = objectGroups;
            return action.posicionesteams;
        default:
            return state;
    }
}