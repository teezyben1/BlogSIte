// getSite,getHome,getSignUp,signUp,getLogIn, logIn,logOut

const { createToken, maxAge } = require("../../authentication/createToken")
const handleError = require("../../errorsHandling/handleErrors")
const User = require("../../models/blogAuthModel/authSchema")

const homePage = (req,res) => {
    res.render('authindex', {title: 'MoneyBlog.com'})
}

const getSignUp = (req,res) => {
    res.render('signup', {title: 'signup'})
}

const getLogIn = (req,res) => {
    res.render('login', {title: 'login'})
}

const signUp = async(req,res) => {
    const user = new User({...req.body})
    try{
        await user.save();
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.json({user})
    }
    catch(err){
        errors = handleError(err)
        res.json({errors})
    }
 
}

const logIn = async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.json({user})
    }
    catch(err){
        errors = handleError(err)
        res.json({errors})
    }

}

const logOut = (req,res) => {
    res.cookie('jwt', '', {maxAge: 1})

    res.redirect('/')
}

module.exports = {
    homePage,
    getSignUp,
    getLogIn,
    signUp,
    logIn,
    logOut
}