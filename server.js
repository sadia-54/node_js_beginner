const express = require('express');
const app = express();

app.get("/", (req, res)=> {
  console.log("Here");
  res.send('Hi');
  res.download("server.js");
});

app.listen(3000);
