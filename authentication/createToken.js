const jwt = require('jsonwebtoken')


const maxAge = 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, "benjamin0987654321@#",{expiresIn:maxAge})

}

module.exports = {
    maxAge,
    createToken
}