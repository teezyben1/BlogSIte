const mongoose = require('mongoose');

const Schema =  mongoose.Schema;


const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    likes:{
        type: Number
    }
},  {timestamps: true})

const Blog = mongoose.model("blog",blogSchema)

module.exports = Blog;