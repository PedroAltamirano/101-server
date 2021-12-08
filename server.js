const express = require('express')
const cors = require('cors')
require('./db_connection')
const multer = require('multer');
const upload = multer();

const app = express()
const port = 3000

const apiRouter = require('./router/api')

app.use(cors())

// json, and x-www-form-urlencoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// multipart/form-data
app.use(upload.array())
app.use(express.static('public'))

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
