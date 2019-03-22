var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res)=>{
  res.render(
    "Hello World"
  )
})

module.exports = router;
