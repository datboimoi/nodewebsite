// Core Node Module
const path = require('path');
// 3rd Party Module
const express = require('express');
// Express Variable
const app = express();
// Page Routes
const mainController = require('./controllers/main');
const errorController = require('./controllers/error');
// Sets PUG as the template engine for Express
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);
app.set('views', 'views');
// Sets a static folder for stylesheets
app.use(express.static(path.join(__dirname, 'public')));
// Uploads Web Pages
app.use(mainController.getHomePage);
app.use(errorController.get404);
// Creates a localhost on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port 3000"));


