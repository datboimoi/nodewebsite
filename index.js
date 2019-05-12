const express = require('express');
const app = express();
const path = require('path');

// Sets a static folder
app.use(express.static(path.join(__dirname, "templates")));

const PORT = process.env.PORT || 8888;
// Creates a localhost on port 8888
app.listen(PORT, () => console.log("Server started on port 8888"));


