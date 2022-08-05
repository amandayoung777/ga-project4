const express = require('express');
const db = require('../db/db.js')
const router = express.Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM messages"
    db.query(sql).then((dbResult) => {
        console.log(dbResult.rows)
        res.json(dbResult.rows)
    })
    .catch((err) => {
        console.log(err);
    });
})

module.exports = router