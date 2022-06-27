

const express =require('express');
const expressEjsLayouts =require('express-ejs-layouts');

const path=require('path');
const indexRouter=require('./routes/index.js');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.set('layout','layouts/layout');
app.use(expressEjsLayouts);
app.use(express.static('public'));


// data base connection

const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:22017/mydatabase');



app.use('/',indexRouter);

app.listen(3000,()=>{
    console.log("hi this is 30000");
})

