const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.use(express.static(publicPath));
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render('main');
})

app.listen(8000,()=>{
    console.log("Listening on port 8000");
});