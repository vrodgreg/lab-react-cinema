const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index TESTING' });
});

module.exports = router;
