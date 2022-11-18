const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path')
require("dotenv").config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended: false}));

app.use(express.json())

app.use(express.static(path.join(__dirname,'public')));

app.use(require('./routes/mailRouter'));




/* app.post('/email',mailController.sendMail); */

app.get('/',(req,res)=>{
    res.render('pages/index')
});
app.get('/cursos',(req,res)=>{
    res.render('pages/cursos')
});

app.get('/contacto',(req,res)=>{
    res.render('pages/contacto')
});




app.listen(PORT);
console.log(`server escuchando puerto ${PORT}`);

module.exports = app ;