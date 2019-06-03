//Core Node Module
const path = require('path');
// 3rd Party Module
const express = require('express');

//Express Variable
const app = express();

// Middleware
const logger = (req, res, next) => {
    console.log("Hello");
    next();
};

// Initialize middleware
app.use(logger);

// Members
app.get("/api/members", (req, res) => res.json(members));


// Sets a static folder for stylesheets
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
// Creates a localhost on port 3000
app.listen(PORT, () => console.log("Server started on port 8888"));


