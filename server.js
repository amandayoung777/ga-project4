const express = require('express');
const pg = require('pg')
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const db = require('../ga-project4/baking-shop/db/db.js')

const productController = require('../ga-project4/baking-shop/controllers/productslist');
const sessionController = require('../ga-project4/baking-shop/controllers/session');
const usersController = require('../ga-project4/baking-shop/controllers/users') 

const port = process.env.PORT || 3001;
const app = express();

app.use(expressSession({
  store: new pgSession({
      pool:db,
      createTableIfMissing:true,
  }),
  secret: ','
}))

// Tell server where client/statics folders are
app.use(express.static('client'))
app.use(express.json())

app.use('/api/products', productController);
app.use('/api/session', sessionController);
app.use('/api/users', usersController);

app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'something went wrong';
  res.status(status).json({ message });
  next(err);
});
// app.get('/api/products', (req,res) => {
//   const sql = "SELECT * FROM products"
//   db.query(sql).then((dbResult) => {
//       console.log(dbResult.rows)
//       res.json(dbResult.rows)
//   })
//   .catch((err) => {
//       console.log(err);
//   });
// })

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});