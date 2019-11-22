# Aim

Implement a simple listing service. 

Task brief:
- Set up your project (git/npm, etc)
- Folder structure
- Homepage to have a form to enter the details of the items you wish to sell
- Click a button on this page to submit the form
- Send the form data to a new page that displays an example mock-up of your newly created listing to sell your item.

# How to use the listing service

Type your name, the name of your item, an item description, and the price you wish to sell your item for.
Click the submit button to submit the form data.
You will be directed to a new page where you can view your newly created listing.

## Technologies

- HTML
- CSS
- JavaScript
- Node.js (express, EJS, cors)

## Setup

```
npm init
npm install express cors --save
```
Open the root URL (homepage route) in your browser by typing in "localhost: 3000".

# How I achieved this

In Index.html:
Created a simple HTML form with a submit button
In the HTML form, pay attention to input NAME value (e.g. input name="userID")
In the HTML form, changed the form action to "/formSent" and form method to "POST"

#### In App.js:
I set up routing...
- app.get() to render index.html on the homepage route

- app.post() to POST form data to the /formSent route. Declared variables and used Express's in-built middleware function called express.urlencoded to parse the text data submitted via the POST method. To check if the form data has been sent through successfully, you can try console.log(req.body) and res.send(req.body) and a new body object containing parsed data in key-value pairs should be displayed.

#### Using EJS:
- Created a formSent.ejs file to display the new listing page

#### In App.js:
```
res.render("formSent.ejs", {name, item, price, description});
```
This renders the new listing page (formSent.ejs) and uses EJS to allow the name, item, price and description variables which are declared in the app.js file to be used in new listing page (formSent.ejs).


## Credits
This link was helpful for handling the form data: https://www.hacksparrow.com/webdev/express/handling-processing-forms.html 

