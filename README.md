# Aim

Implement a simple listing service. 

Task brief:
- Set up your project (git/npm, etc)
- Folder structure
- Homepage to have a form to enter the details of the items you wish to sell
- Click a button on this page to submit the form
- Send the form data to a new page that displays an example mock-up of your newly created listing to sell your item.

## How to use the listing service

Type your name, the name of your item, an item description, and the price you wish to sell your item for.
Click the submit button to submit the form data.
You will be directed to a new page where you can view your newly created listing.

### Technologies

- HTML
- CSS
- JavaScript
- Node.js (express, EJS, cors)

#### Setup

```
Test
```

##### How this was achieved

When you submit the form, the page goes to localhost:3000/formSent. 

On localhost:3000/formSent. When you console log req.body, the JavaScript object is displayed.