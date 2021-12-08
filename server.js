const express = require('express')
const cors = require('cors')
require('./config/db_connection')
const multer = require('multer');
const mbToBits = mb => 1024 * 1024 * mb
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: mbToBits(2) }
});
const uploadImage = require('./services/firebase')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())

// json, and x-www-form-urlencoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// multipart/form-data 
app.use(upload.single('image'))
app.use(uploadImage)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('101 Server online')
})

const apiRouter = require('./router/api')
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
