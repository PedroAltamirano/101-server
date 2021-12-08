const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase-key.json');
const BUCKET = 'server-334513.appspot.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
})

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.file) return next()
  const image = req.file
  const imgName = Date.now() + '.' + image.originalname.split('.').pop()

  const file = bucket.file(imgName)
  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    }
  })
  stream.on('error', error => {
    console.log(error)
  })
  stream.on('finish', async () => {
    await file.makePublic()
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${imgName}`
    next()
  })
  stream.end(image.buffer)
}

module.exports = uploadImage