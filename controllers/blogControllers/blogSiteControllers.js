// //createPost, createNewPost, detailedPost,deletePost,updatePost,update

const Blog = require("../../models/blogsModel/blogsSchema")



const createPost = (req,res) =>{
    res.render('create-post', {title: 'Create Post'})

}

const createNewPost = async(req,res) =>{
    const post = new Blog({...req.body})
    const blog = await post.save()
    res.redirect('home')
      
}

const detailedPost = async(req,res) =>{
    const id = req.params.id
    const blog = await Blog.findById(id)
    res.render('details', {title: blog.title, blog: blog})
    
}

const deletePost = async(req,res) =>{
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.redirect('/home')
    
}

const updatePost = async(req,res) =>{
    const id = req.params.id
    const post = await Blog.findById(id)
    res.render('update', {title: "updatePost", blog: post})
  
}

const update = async(req,res) =>{
    const id = req.params.id
    const blog = await Blog.findOneAndUpdate({_id: id},{...req.body})
    res.redirect('/home')
    
}

    

    
    



module.exports = {
    createPost, 
    createNewPost,
    detailedPost,
    deletePost,
    updatePost,
    update
    
}