const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const hamsters = require('./routes/hamsters.js')

const PORT = 1338
const staticfolder = path.join(__dirname, 'public')



//console.log(" ${req.method}",  "${req.url}" , req.params)
app.use((req, res, next) => {
  console.log(req.method,  req.url , req.params),
  next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(staticfolder) )




app.get('/', (req, res) => {
  res.send('Firestore project')
})
//app.get('/index.html', (req, res) => {
//  res.sendfile('public/index.html')
//})

app.use('/hamsters', hamsters)



app.listen(PORT, () => (
  console.log('server is listening on port ' + PORT)
))
