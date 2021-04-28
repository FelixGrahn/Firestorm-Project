const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const hamsters = require('./routes/hamsters.js')

const PORT = process.env.PORT || 1338
const staticfolder = path.join(__dirname, 'public')
const staticimgs = path.join(__dirname, 'img')


app.use((req, res, next) => {
  console.log(req.method,  req.url , req.params),
  next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(staticfolder) )
app.use( '/img', express.static(staticimgs) )


app.get('/', (req, res) => {
  res.send('Firestore project')
})


app.use('/hamsters', hamsters)


app.listen(PORT, () => (
  console.log('server is listening on port ' + PORT)
))
