const express = require('express')
const app = express()

const massive = require('massive')

app.use(express.json())

const baseURL = 'http://localhost3000'
const dbURL = '/api/foody'

app.listen(3000, () => console.log('unity on 3001!'))
