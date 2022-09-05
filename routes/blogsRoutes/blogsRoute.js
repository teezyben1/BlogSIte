const express = require('express');
const authenticate = require('../../authentication/authenticate');

const { createPost, createNewPost, detailedPost,
    deletePost,updatePost, update } = require('../../controllers/blogControllers/blogSiteControllers')

const blogsRouter = express.Router();

blogsRouter.get('/post', authenticate, createPost)
blogsRouter.get('/blogs/:id', authenticate, detailedPost)
blogsRouter.post('/post',authenticate, createNewPost)
blogsRouter.get('/blogs/delete/:id', authenticate, deletePost)
blogsRouter.post('/update/:id', authenticate, update)
blogsRouter.get('/blogs/update/:id', authenticate, updatePost)




module.exports = blogsRouter