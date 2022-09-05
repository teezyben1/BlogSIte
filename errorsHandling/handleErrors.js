const handleError = function (err){
let errors = {email: '', password: ''}



// Incorrect Email
if (err.message === 'this email does not exist'){
    errors.email = 'Please enter a correct email'
}
if (err.message === 'please  enter a valid email'){
    errors.message = 'the email already exist'
}

// incorrect password
if (err.message === 'incorrect password' || err.message === 'please enter a password'){
    errors.password = 'Please enter a correct password'
}
if (err.message === 'Minimum password length is 6 characters'){
    errors.password = 'password must be more than 5 characters'
}

// Duplicated email
if (err.code === 11000){
    errors.email = 'That email already exist'
    return errors
}
// Validation Errors
if (err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path] = properties.message
    })
}

return errors

}


module.exports = handleError;