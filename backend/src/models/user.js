const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(email) {
            if (!validator.isEmail(email)) {
                throw new Error("Wrong email!")
            }
        }
    },
    password: {
        type: String,
        minlength: 7,
        validate(password) {
            if (password.toLowerCase().includes('password')) {
                throw new Error("Password cannot contain 'password!")
            }
        }
    },
    token: {
        type: String
    }
})

UserSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password')) {
        const salt = await bcrypt.genSaltSync(10);
        user.password = await bcrypt.hashSync(user.password, salt);
    }
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User