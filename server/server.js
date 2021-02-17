const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const countriesRoutes = require('./routes/countriesRoutes.js')
const pinnedCountriesRouter = require('./routes/pinnedCountriesRouter.js')

// instantiate express server
const app = express()

// add logging middleware
app.use(morgan('dev'))

// add security middlewares
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(helmet())

// parse request body
app.use(bodyParser.json())

// add routes
app.use(countriesRoutes)
app.use(pinnedCountriesRouter)

// bind server to port
app.listen(4000, () => console.log('listening on port 4000...'))
