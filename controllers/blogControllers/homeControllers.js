const { findByIdAndUpdate, findOneAndUpdate } = require("../../models/blogAuthModel/authSchema");
const Blog = require("../../models/blogsModel/blogsSchema")



const home = async(req,res) => {
    const data = await Blog.find().sort({createdAt: -1});
    res.render('index', {title: "Home", blogs: data})
    
}

const updateLikes = async(req,res) => {
    const id = req.params.id;

    const user = await Blog.findOneAndUpdate({_id: id}, {$inc : {likes: 1}} )
    return res.redirect('/blogs/likes/:id')

}

module.exports = {home,updateLikes }