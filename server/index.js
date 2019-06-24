require('dotenv').config()
const express = require('express'),
      massive = require('massive')
const app = express()
const {CONNECTION_STRING,SERVER_PORT,SESSION_SECRET} = process.env


app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
  app.set('db',db)
  console.log('All your Database are now belong to us',db.listTables())
  app.listen(SERVER_PORT, () => console.log(`Listening on port:${SERVER_PORT}`))
})