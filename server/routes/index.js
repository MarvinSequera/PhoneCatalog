const express = require('express');
const router  = express.Router();
const Phone = require('../models/Phone.model')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/phones',(req,res,next) => {
  Phone.find()
  .then(thePhones => {res.json(thePhones)})
  .catch(err => err=> console.log("error al recuperar telefonos dela BBDD",err) )
})

module.exports = router;
