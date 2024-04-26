const express = require('express');
const router = express.Router();

router.get("/", (req, res)=> {
    res.send('user lists');
  });
  
router.get('/new', (req, res)=> {
    res.send('new user form');
  });

  // to create
router.post('/', (req, res)=> {
    res.send('create user');
  });

  router.get('/:id', (req, res)=> {  //number directly from the URL
    // req.params.id; 
    //dynamic parameter
    res.send('Get User With ID ' +req.params.id);
  });

  // to update
  router.post('/', (req, res)=> {
    res.send('update user with ID ' +req.params.id);
  });

  //to delete
  router.post('/', (req, res)=> {
    res.send('delete user with ID ' +req.params.id);
  });

  module.exports = router