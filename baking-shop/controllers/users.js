// Will users login/signup

const express = require('express');
const router = express.Router()
const db = require('../db/db')
const bcrypt = require('bcrypt')

function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}


router.post('/', (req,res) => {    
    //Take data from the post request
    const { name, email, password_hash } = req.body;
    

    //Check for required inputs
    if (name === undefined || name === '') {
        res.status(400).json({success: false, message: 'name is required'})
    } else if (email === undefined || email === '') {
        res.status(400).json({success: false, message: 'email is required'})
    } else if (email.length <7) {
        res.status(400).json({success: false, message: 'email is too short'})
    } else if (password_hash === undefined || password_hash === '') {
        res.status(400).json({success: false, message: 'password is required'})
    } else if (password_hash.length < 6) {
        res.status(400).json({success: false, message: 'password is too short'})
    } else {
        let sqlEmail = `SELECT * FROM users WHERE email='${email}'`
        db.query(sqlEmail).then((dbResult) => {
            console.log(dbResult.rows)
            const sql = 'INSERT INTO users(name, email, password_hash, admin) VALUES ($1, $2, $3, $4)'
            db.query(sql, [name, email, generateHash(password_hash), false]) // admin is false by default
                .then(dbRes => {
                res.json({ success: true })           
                }).catch((err) => {
                    res.status(500).json({message: 'unknown error occured'})
                })
        })


    }
})

module.exports = router