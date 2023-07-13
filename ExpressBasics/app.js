const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to the main page</h1>");
});

app.get("/dogs", (req, res, next) => {
  res.send("<h1>Welcome to the dogs page</h1>");
});

app.get("/dogs/cats/mogs", (req, res, next) => {
    res.send("YOOOOOOOOOOOOOOO");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});