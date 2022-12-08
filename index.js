const express = require('express');
const router = require('./routes/openai_routes');
require('dotenv').config();
const port = 5000

const app = express()

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/openai',router);


app.listen(port,()=>console.log('listening at port '+port))