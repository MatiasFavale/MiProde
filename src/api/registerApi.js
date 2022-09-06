import { handleResponse, handleError } from "./apiUtils";
var sUrlHeroku = "https://miprode.herokuapp.com";
const baseUrl = sUrlHeroku + "/api/user/register/";
const baseUrlLog = sUrlHeroku + "/api/user/login/";
const baseUrlCode = sUrlHeroku + "/api/user/registerCodeAuth/";


export function postUser(user) {
  const registerData = {name: user.name, email:user.email, password:user.password};
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(registerData)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function postUserCode(user) {
  const registerData = {name: user.name, email:user.email, password:user.password, codeAuth:user.codeAuth};
  return fetch(baseUrlCode, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(registerData)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(user) {
  const loginData = {email:user.email, password:user.password};
  const objectData = {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(loginData)
  };
  return fetch(baseUrlLog, objectData)
    .then(handleResponse)
    .catch(handleError);
}