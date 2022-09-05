const jwt = require('jsonwebtoken')


const authenticate = (req,res,next) => {
    const token = req.cookies.jwt;

    if (token){
        jwt.verify(token,"benjamin0987654321@#", (err,decodeToken) =>{
            if (err){
                res.redirect('/')
            }
            else{
                next();
            }
        })
    }
    else{
        res.redirect('/')
    }

}

module.exports = authenticate;