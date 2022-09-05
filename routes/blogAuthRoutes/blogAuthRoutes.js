const express = require('express')
const { homePage, getSignUp, getLogIn, 
    signUp, logIn,logOut } = require('../../controllers/blogAuthControllers/BlogAuthControllers')

const AuthRouter = express.Router();

AuthRouter.get('/', homePage);
AuthRouter.get('/signup', getSignUp);
AuthRouter.post('/signup', signUp);
AuthRouter.get('/login', getLogIn);
AuthRouter.post('/login', logIn);
AuthRouter.get('/logout', logOut)


module.exports = AuthRouter;