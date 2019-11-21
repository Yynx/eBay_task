const express = require('express'); 
const app = express(); 
const port = 3000;
const axios = require('axios').default;
const cors = require('cors')


app.use(cors());
app.use(express.static('public'));  // allows you to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static('views'));   // allows you to serve images, CSS files, and JavaScript files in a directory named views
app.use(express.urlencoded()); //allows us to extract info from a html (parse URL-encoded bodies)
app.engine('html', require('ejs').renderFile); //this is an extension required to avoid html render error. needed for making a project with multiple pages

app.get('/', (req, res) => res.send("index"));        // GET request to home page route, responds with index page

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  