const express = require('express')
const mongoose = require('mongoose');
const app = express()
const router = require('./routes/router');
require('dotenv').config({path: './config.env'});
const port = 5000 || process.env.port;

const conDb = require("./db/db")

app.use(express.json)
conDb();

app.use('/api', router)
app.listen(port, (req, res) =>{
    console.log("Database connected successfully");
})

