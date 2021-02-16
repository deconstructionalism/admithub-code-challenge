const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const config = require('../config.js')
const router = require('./router.js')

// destructure shared configuration
const {
  client: { port: clientPort },
  server: { port: serverPort }
} = config

// instantiate express server
const app = express()

// add logging middleware
app.use(morgan('dev'))

// add security middlewares
app.use(cors({ origin: `http://localhost/${clientPort}` }))
app.use(helmet())

// add routes
app.use(router)

// bind server to port
app.listen(serverPort, () => console.log(`listening on port ${serverPort}...`))
