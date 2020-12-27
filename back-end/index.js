const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

mongoose.connect(process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>  console.log("Database Connected successfully"))
    .catch(error => console.log(new Error(error)))

//since mongoose promise is depreciated, we override it with node's promise
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("X-Requested-With", "XmlHttpRequest")
    next()
})

app.use('/api', routes)

app.use((err, req, res, next) => {
    console.log(err)
    next()
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})