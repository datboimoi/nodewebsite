const express = require('express');
const app = express();

const PORT = process.env.PORT || 8888

app.listen(PORT, () => console.log("Server started on port 8888"))

app.get("/", (req, res) => {
    res.send("Hello World")
})

