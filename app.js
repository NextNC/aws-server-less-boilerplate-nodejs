'use strict';

const express = require('express')
const sls = require('serverless-http')
const app = express()

// Varible key was define in secrets.json and declred in serverless.yml
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World! '+process.env.KEY)
})
module.exports.server = sls(app)
