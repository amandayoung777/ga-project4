const express = require('express');
const pg = require('pg')
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const db = require('./baking-shop/db/db.js');


const productController = require('./baking-shop/controllers/productslist');
const sessionController = require('./baking-shop/controllers/session');
const usersController = require('./baking-shop/controllers/users');
const messagesController = require('./baking-shop/controllers/messages');
const contactController = require('./baking-shop/controllers/contact');

const port = process.env.PORT || 3001;
const app = express();
app.use(express.static('./client/build'));

app.use(expressSession({
  store: new pgSession({
      pool:db,
      createTableIfMissing:true,
  }),
  secret: ','
}))

// Tell server where client/statics folders are
app.use(express.static('client'));
app.use(express.json());

app.use('/api/products', productController);
app.use('/api/session', sessionController);
app.use('/api/users', usersController);
app.use('/api/messages', messagesController);
app.use('/api/contact', contactController);

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


/* final catch-all route to index.html defined last */
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/client/build/index.html');
// })

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});