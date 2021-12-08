const express = require('express')
const cors = require('cors')
// require('./db_connection')
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: 'public/uploads',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })
// const upload = multer({
//   storage,
//   limits: { fileSize: 1000000 }
// });

const app = express()
const port = 3000

app.use(cors())

// json, and x-www-form-urlencoded data
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// multipart/form-data
// app.use(upload.single('image'))
// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('101 Server online')
})

// const apiRouter = require('./router/api')
// app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
