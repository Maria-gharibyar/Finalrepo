require('dotenv').config();
const express=require('express');
const cors=require('cors');

const cookieParser = require('cookie-parser');

const app=express();
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


require('./config/Book.config')
require('./route/Book.route')(app)
require('./route/user.route')(app)

app.listen(8000,()=>{
    console.log('Listening the port 8000')
})