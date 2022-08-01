const express = require('express')
// const session = require('express-session')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
      res.json({ message: 'success' });
    })

module.exports = router