const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 8000;

// Defining paths for directories
const publicPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// Setting paths for public, views and partials...
app.use(express.static(publicPath));
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

// Handling Routes...
app.get('/',(req,res)=>{
    res.render('main');
})

// Starting the Local Server at Port - port
app.listen(port,()=>{
    console.log(`Listening on localhost:${port}`);
});