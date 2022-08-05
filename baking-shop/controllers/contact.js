const express = require('express');
const router = express.Router()
const db = require('../db/db')


router.post('/', (req,res) => {    
    //Take data from the post request
    const { name, email, message } = req.body;

    //Check for required inputs
    if (name === undefined || name === '') {
        res.status(400).json({success: false, message: 'name is required'})
    } else if (email === undefined || email === '') {
        res.status(400).json({success: false, message: 'email is required'})
    } else if (email.length <7) {
        res.status(400).json({success: false, message: 'email is too short'})
    } else if (message.length > 250 ) {
        res.status(400).json({success: false, message: 'message is too long'})
    } else {
        let sqlMsg = `SELECT * FROM messages WHERE email='${email}'`
        db.query(sqlMsg).then((dbResult) => {
            console.log(dbResult.rows)
            const sql = 'INSERT INTO messages(name, email, message) VALUES ($1, $2, $3)'
            db.query(sql, [name, email, message]) 
                .then(dbRes => {
                res.json({ success: true })           
                }).catch((err) => {
                    res.status(500).json({message: 'unknown error occured'})
                })
        })


    }
})

module.exports = router