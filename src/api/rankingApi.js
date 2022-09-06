import { handleResponse, handleError } from "./apiUtils";
var sUrlHeroku = "https://miprode.herokuapp.com";
const baseUrl = sUrlHeroku + "/api/getRank/";

export function getRanking(userLogin) {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    console.log(baseUrl);
    return fetch(baseUrl, requestOptions)
        //.then(response => response.text())
        .then(handleResponse)
        .catch(handleError);
}