import { handleResponse, handleError } from "./apiUtils";
const baseUrlProde = process.env.API_URL + "/api/points/";

export function savePoints(userLogin, point, isPlayerSelect) {
    debugger;
    var sChampionId = "";
    var sPlayerId = "";
    if(isPlayerSelect){
        sPlayerId = point.playerSelect;
        sChampionId = "NA";
    }else{
        sPlayerId = "NA";
        sChampionId = point.teamSelect;
    }
    const predictionData = {
        playerSelect: sPlayerId, 
        teamSelect: sChampionId
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(predictionData)
    };    
    return fetch(baseUrlProde, requestOptions)
      .then(handleResponse)
      .catch(handleError);    
  }

  export function getPointsProde(userLogin) {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    console.log(baseUrlProde);
    return fetch(baseUrlProde, requestOptions)
        //.then(response => response.text())
        .then(handleResponse)
        .catch(handleError);
}