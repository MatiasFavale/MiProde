import { handleResponse, handleError } from "./apiUtils";
var sUrlHeroku = "https://miprode.herokuapp.com";
const baseUrl = sUrlHeroku + "/api/matches/";
const baseUrlProde = sUrlHeroku + "/api/prodes/";

export function getMatches(userLogin, sFase) {
    var sQuery = '?q={"fase" : {"$regex" :"' + sFase + '"}}';
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(baseUrl + sQuery, requestOptions)
        //.then(response => response.text())
        .then(handleResponse)
        .catch(handleError);
}

export function getProdes(userLogin) {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(baseUrlProde, requestOptions)
        //.then(response => response.text())
        .then(handleResponse)
        .catch(handleError);
}

export function savePrediction(userLogin, prediction) {
    
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

  export function saveResultados(userLogin, match) {
    
    const resultsData = {
        code: match.code,
        teamOne: match.teamOne,
        teamTwo: match.teamTwo ,
        goalsTeamOne: Number(match.goalsTeamOne),
        goalsTeamTwo: Number(match.goalsTeamTwo),
        winner:"FIN"
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    };    
    return fetch(baseUrl + match._id, requestOptions)
      .then(handleResponse)
      .catch(handleError);    
  }

  export function saveDisabledMatch(userLogin, match) {
    
    const resultsData = {
        code: match.code,
        habilitado: false,
        winner:""
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    };    
    
    
    return fetch(baseUrl + match._id, requestOptions)
      .then(handleResponse)
      .catch(handleError);   
    
  }