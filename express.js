const express = require('express')
const path = require('path')
const app = express()
const port = 3000


//middleware : {app.use()} --> it is a function ..which keeps access of response and request
//const meghaMiddleware = (req, res, next)=>{
  //console.log(req)
  //next() // we use this because we want middleware to run simaltaneously 
//}

app.use(express.static(path.join(__dirname, "public")))
//app.use(meghaMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World2!' + req.params.name)
})
app.get('/about', (req, res) => {
    //res.send('this is an about page')
res.sendFile(path.join(__dirname, 'index.html'))
//res.status(500)
 res.json({"megha": 34})
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})