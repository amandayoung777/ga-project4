const express = require('express')
// const session = require('express-session')
const db = require('../db/db')
const router = express.Router()
const bcrypt = require('bcrypt');

//Test Case is amanda@test.com, test123
function isValidPassword(plainTextPassword, passwordHash) {
  // Returns true or false
  return bcrypt.compareSync(plainTextPassword, passwordHash)
}

router.post('/', (req,res) => {

  //get email and pword from body of request
  const { email, password } = req.body
  const emailCheck = email
  const pwordCheck = password
  console.log(email,password)
  //check email and pword
  let sql = `SELECT * FROM users WHERE email='${email}'`
  db.query(sql)
      .then(dbRes => {
          if (!dbRes.rows == []) {
              const { id, name, email, password_hash } = dbRes.rows[0]
              if (email == emailCheck && isValidPassword(pwordCheck, password_hash)) {
                  req.session.id = id // get this from DB query
                  req.session.name = name //get from DB 
                  req.session.email = email //get form DB
                  res.json({ message: 'logged in successfully' }) 
              } else {
                  res.status(400).json({success: false, message: 'login failed, email or username doesnt match'})
              }
          } else {
              res.status(400).json({success: false, message: 'login failed, user doesnt exist'})
          }
  })
})

// Used for getting a logged in user when page is loaded
router.get('/', (req,res) => {
  const id = req.session.id
  const name = req.session.name
  const email = req.session.email
  console.log(email, 'this is a logged in user')
  res.json({
      'id': id,
      'name': name,
      'email': email
  })

})

// Delete cookies (for logout)
router.delete('/', (req,res) => {
  req.session.destroy()
  res.json({success: true})
})

module.exports = router