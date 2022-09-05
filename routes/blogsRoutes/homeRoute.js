const express = require('express');
const authenticate = require('../../authentication/authenticate');
const homeRouter = express.Router();
const {home, updateLikes} = require('../../controllers/blogControllers/homeControllers')

homeRouter.get('/home', authenticate, home )
homeRouter.get('/blogs/likes/:id', updateLikes)


module.exports = homeRouter;