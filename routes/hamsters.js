const getdatabase = require('../database.js')
const db = getdatabase()


const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  console.log('/hamsters REST API');
  res.send('hamsters REST API')
})


module.exports = router
