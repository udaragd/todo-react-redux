import { authenticationEndPoints } from '../constants/api_endpoints';
const axios = require('axios');


export function checkLogin(userEmail, userPassword) {

    let params = {
        'userEmail': userEmail,
        'userPassword': userPassword
    };

    let url = authenticationEndPoints.login;

    return new Promise(function (resolve, reject) {

        axios.post(url, params, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error.response);
        });

    });

}