const express = require('express')
const User = require('../models/user')
const router = express.Router()
const jwt = require("jsonwebtoken")
const env = require('../env')

router.post('/user', async (req, res) => {
    try {
        if (req.body.password !== req.body.confirmPassword) {
            throw new Error('Passwords don\'t match!')
        }

        const token = jwt.sign(req.body, env.SECRET_KEY, { expiresIn: "1h" })
        const userCred = {
            ...req.body,
            token
        }
        const user = new User(userCred)
        await user.save()

        console.log(user)
        res.send(user)
    }catch(e) {
        console.log(e)
        res.status(500).send({Error: e.message})
    }
})

module.exports = router