const path = require('path'); // https://www.w3schools.com/nodejs/ref_path.asp
const express = require('express'); 
const app = express(); 
const port = 3000;
const axios = require('axios').default;
const cors = require('cors')
const ejs = require ('ejs')


app.use(cors());
app.use(express.static('public'));  // allows you to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static('views'));   // allows you to serve images, CSS files, and JavaScript files in a directory named views
app.use(express.urlencoded()); // allows us to process the text data submitted via the POST method (the processed form data is available on the body property of the request object)
app.engine('html', require('ejs').renderFile); //this is an extension required to avoid html render error. needed for making a project with multiple pages

app.get('/', (req, res) => res.send("index"));        // GET request to home page route, responds with index page

app.post('/formSent', (req, res) => {

    const name = req.body.userID;
    const item = req.body.itemName;
    const price = req.body.itemPrice;
    const description = req.body.itemDescription;

    res.render("formSent.ejs", {name:name, item:item, price:price, description:description});

    // console.log(req.body); 
    // res.send(req.body);
});

app.get('/formSent', (req, res) => { 
    res.render("formSent.html");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  