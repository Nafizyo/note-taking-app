// MODULES
const express = require('express')
const db = require(./db.js)
const app = express()
;
// BASIC CONFIG
app.use(express.static('public'))
app.use(express.urlencoded( {extended: false} ))
app.use(express.json())
;
// DATABASE CONFIG
  // import db
const mongoose = require('mongoose')
// const mySecret = process.env['MONGO_URI']
//mongoose.connect(mySecret, {useNewUrlParser: true, useUnifiedTopology: true})
  // schemas & models
const { Schema } = mongoose
;
// POST ROUTES
  // create new note
app.post('/new/:title', (req, res) => {
  
})
  // update past note
app.post('/past/:title', (req, res) => {
  
})
// GET ROUTES
  // homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html')
})
  // get note by title
app.get('/past/:title', (req, res) => {
  
})
;
// START
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
