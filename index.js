const express = require('express');
const path = require('path');
const members = require('./members');

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


// Sets a static folder
app.use(express.static(path.join(__dirname, "templates")));

const PORT = process.env.PORT || 8888;
// Creates a localhost on port 8888
app.listen(PORT, () => console.log("Server started on port 8888"));


