const express = require('express'); 
const app = express(); 
const port = 3000;
const cors = require('cors');
const ejs = require ('ejs');


app.use(cors());
app.use(express.static('public'));  // allows you to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static('views'));   // allows you to serve images, CSS files, and JavaScript files in a directory named views
app.use(express.urlencoded());   // allows us to process the text data submitted via the POST method (the processed form data is available on the body property of the request object)
app.set("view engine","ejs");   // tells app to use EJS as template engine

app.get('/', (req, res) => res.render("index.html"));        // GET request to home page route, renders index page

app.post('/formSent', (req, res) => {  // the submitted form data is handled here. To check if the form data has been sent through successfully, you can try console.log(req.body) or res.send(req.body) and a new body object containing parsed data in key-value pairs should be displayed.

    const name = req.body.userID; // creating variables from the new body object
    const item = req.body.itemName;
    const price = req.body.itemPrice;
    const description = req.body.itemDescription;

    res.render("formSent.ejs", {name, item, price, description}); // renders the variable to the EJS template 

    // console.log(req.body); 
    // res.send(req.body);
});

// app.get('/formSent', (req, res) => { 
//     res.render("formSent.html");
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  