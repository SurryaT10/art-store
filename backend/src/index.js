require('./db/mongoose')
const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')

const app = express()
app.use(express.json())
app.use(cors())
app.use(userRouter)

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('server is up and running', + port)
})