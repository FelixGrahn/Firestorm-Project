const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = 1338
const staticfolder = path.join(__dirname, 'public')


app.use( express.json() )
app.use( cors() )
app.use( express.static(staticfolder) )

//console.log(" ${req.method}",  "${req.url}" , req.params)
app.use((req, res, next) => [
  console.log(req.method,  req.url , req.params),
  next()
])

app.get('/', (req, res) => (
  res.send('welcome to the exercise project')
))


app.listen(PORT, () => (
  console.log('server is listening on port ' + PORT)
))
