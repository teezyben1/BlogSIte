const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'please enter your name'],
        lowercase: true

    },
    username:{
        type: String,
        required: [true, 'please enter your username'],
        lowercase: true
    

    },
    email:{
        type: String,
        required: [true, 'please enter your email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please  enter a valid email']

    },
    password:{ 
        type: String,
        required: [true, 'please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters' ]
    }
});  

// Login Method
 userSchema.statics.login = async function(email,password){
    const user = await this.findOne({ email })
    if (user) {
        const passwordOk = await bcrypt.compare(password,user.password)
        if (passwordOk){
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('this email does not exist')
 }

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next()

})


const User = mongoose.model('user', userSchema)




module.exports = User;