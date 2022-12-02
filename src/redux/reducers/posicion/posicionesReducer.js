import * as types from "../../actions/actionTypes";
import initialState  from "../initialState";

export default function posicionesReducer(state = initialState.posicionesteams, action){
    switch (action.type){
        case types.LOAD_POSICIONES_TEAMS_SUCCESS:
            
            var objectGroups = {
                "GrupoA": action.posicionesteams.filter(nfilter=>nfilter.group === "A")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                "GrupoB": action.posicionesteams.filter(nfilter=>nfilter.group === "B")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                "GrupoC": action.posicionesteams.filter(nfilter=>nfilter.group === "C")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                "GrupoD": action.posicionesteams.filter(nfilter=>nfilter.group === "D")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                 //   .sort((a, b) => a.points > b.points ? -1 : 1).sort((a, b) => +b.difference-a.difference),
                "GrupoE": action.posicionesteams.filter(nfilter=>nfilter.group === "E")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                "GrupoF": action.posicionesteams.filter(nfilter=>nfilter.group === "F")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                "GrupoG": action.posicionesteams.filter(nfilter=>nfilter.group === "G")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1),
                "GrupoH": action.posicionesteams.filter(nfilter=>nfilter.group === "H")
                .sort((a, b) => +b.difference-a.difference).sort((a, b) => a.points > b.points ? -1 : 1)
            }

            var arr = []
            for(let i in objectGroups.GrupoH){
                var o = objectGroups.GrupoH.filter(nfilter=>nfilter.difference === objectGroups.GrupoH[i].difference)
                if(o.length>1){
                    var a = o.sort((a, b) => +b.goalsf-a.goalsf);
                    for(var r in a){
                        if(arr.filter(nfilter=>nfilter.code === a[r].code).length > 0){
                            console.log("");
                        }else{
                            arr.push(a[r])
                        }
                    }
                }else{
                    console.log(o)
                    arr.push(o[0])
                }    
            }
            objectGroups.GrupoH = arr;
            action.posicionesteams = objectGroups;
            return action.posicionesteams;
        default:
            return state;
    }
}