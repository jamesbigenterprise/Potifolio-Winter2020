import { makeRequest }  from "./authHelpers.js";
import Auth from "./auth.js"

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

const authenticator = new Auth();


    console.log('loaded');
    authenticator.login();

    document.getElementById('loginButton').addEventListener('click', authenticator.login());



