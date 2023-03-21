const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
let fileupload = require('express-fileupload');
const app = express()

const router = require('./router/router')
app.use("", router)
const env = require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.l162asa.mongodb.net/myFiles`

app.use(fileupload());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("Connect")}).catch(err => { console.log(err)})



app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`)
})