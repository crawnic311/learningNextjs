const express = require('express')
const app = express()

const massive = require('massive')

app.use(express.json())

const baseURL = '/api/messages'
const dbURL = '/api/food'
