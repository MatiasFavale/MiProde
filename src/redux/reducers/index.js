import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import userLogin from "./login/loginReducer";
import teams from "./team/teamsReduces";
import matches from "./match/matchesReducer";
import predictions from "./prediction/predictionsReducer";
import players from "./player/playersReducer";
import points from "./point/pointsReducer";
import posicionesteams from "./posicion/posicionesReducer";
import rankings from "./ranking/rankingsReducer";
import activegroup from "./activeGroup/activeGroupReducer";
import campeon from "./campeon/campeonReducer";


import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    courses,
    authors,
    userLogin,
    teams,
    matches,
    predictions,
    players,
    points,
    posicionesteams,
    rankings,
    activegroup,
    campeon,
    apiCallsInProgress
});

export default rootReducer;