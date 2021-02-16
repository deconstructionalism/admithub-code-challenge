const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const router = require('./router.js')

// instantiate express server
const app = express()

// add logging middleware
app.use(morgan('dev'))

// add security middlewares
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(helmet())

// add routes
app.use(router)

// bind server to port
app.listen(4000, () => console.log('listening on port 4000...'))
