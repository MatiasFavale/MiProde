import { handleResponse, handleError } from "./apiUtils";
var sUrlHeroku = "https://miprode.herokuapp.com";
const baseUrlProde = sUrlHeroku + "/api/prodes/";

export function getProdes(userLogin) {
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

export function savePrediction(userLogin, prediction) {
    debugger;
    const predictionData = {
        match:prediction.code, 
        teamOne: prediction.teamOne,
        teamTwo: prediction.teamTwo ,
        PrediccionTeamOne: Number(prediction.PrediccionTeamOne),
        PrediccionTeamTwo: Number(prediction.PrediccionTeamTwo)
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