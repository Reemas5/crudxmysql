const express = require('express');
const path = require('path')

const app = express()

const {pool} = require('./config/db')
const routers = require('./router/routes')


app.use(express.static(path.join(__dirname + "/public")))
app.use(express.static(path.join(__dirname + "/views")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use('/',routers)


let port = 4000;
app.listen(port,(err)=>{
    if (err){
        console.log(err);
    }
    else{
    console.log("server is running");
    
    }
})