const express = require('express');
const session = require('express-session');
const res = require('express/lib/response');
const bodyParser = require('body-parser');

const port = 3000; 
var path = require('path');
const app = express();

const db = require('./models/db');

app.use(session({secret:'j412d12r15di5'}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/',(req,res)=>{

    if(req.body.senha == senha && req.body.login == login){
        req.session.login = login;

        res.render('logado',{login: login});

    }else{
        res.render('index');
    }
})

app.get('/', (req,res)=>{
    if(req.session.login){
        res.render('logado',{login: login});
        console.log(req.session.login + ' está conectado.')
    }else{
        res.render('index');
    }
})

app.listen(port,()=>{
    console.log('Servidor online.');
})
