const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./db_connection')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const apiRouter = require('./router/api')
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
