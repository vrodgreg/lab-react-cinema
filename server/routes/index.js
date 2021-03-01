const express = require('express');
const router = express.Router();
const MovieList = require('../models/MovieCollection.model') 

/* GET home page */
router.get('/', (req, res) => {
 console.log('called');
  res.json({ message: 'index TESTING' });
});

router.get('/get-all-movies', (req, res) => {
  MovieList.find().then(films => {
    res.json(films)
  })
})

router.get(`/get-one-movie/:id`, (req, res) => {
  console.log('get this movie by id', req.params.id)
  MovieList.findById(req.params.id).then(oneMovie => {
    console.log(oneMovie)
    res.json(oneMovie)
  })
})


// router.get('/get-one-movie/:id', (req, res) => {
//   console.log('get this one movie', req.params)
//   MovieList.findById(req.params.id).then(movie => {
//     res.json(movie)
//   })
// })


module.exports = router;




