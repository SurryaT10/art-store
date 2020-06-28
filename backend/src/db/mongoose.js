const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/art-store-api', {
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})

