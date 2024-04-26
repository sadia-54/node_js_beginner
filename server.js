const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
  console.log("Here");
  // res.send('Hi');
  // res.download("server.js");
  res.render('index', {text: "World"});
});

app.get("/users", (req, res)=> {
  res.send('user lists');
});

app.get('/users/new', (req, res)=> {
  res.send('new user form');
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);
