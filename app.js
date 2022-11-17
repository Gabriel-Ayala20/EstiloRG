const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))






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