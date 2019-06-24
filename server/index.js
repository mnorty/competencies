require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      auth_ctrl = require('./controllers/auth_ctrl')
const app = express()
const {CONNECTION_STRING,SERVER_PORT,SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false,
  resave:false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

massive(CONNECTION_STRING).then((db) => {
  app.set('db',db)
  console.log('All your Database are now belong to us',db.listTables())
  app.listen(SERVER_PORT, () => console.log(`Listening on port:${SERVER_PORT}`))
})

app.post('/auth/register',auth_ctrl.register)
app.post('/auth/login',auth_ctrl.login)