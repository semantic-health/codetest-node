'use strict'

const express = require('express')
const app = express()

// ----------- Write code here

// ----------- End writing code here

app.listen('8000', (err) => {
  if (err) {
    return console.error('Something went wrong')
  }
  console.log('API listening on localhost:8000')
})
