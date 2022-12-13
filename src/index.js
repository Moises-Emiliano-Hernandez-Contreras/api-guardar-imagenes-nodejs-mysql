const express = require('express')
const mysql = require('mysql2')
const conn = require('express-myconnection')
const routes = require('./routes/index.routes')
const cors = require('cors')
const app = express()
const port = 5000
const dbConfig = {
      host:"localhost",
      port:"3306",      
      user:"root",
      password:"user",
      database:"imagenes"
}
app.use(conn(mysql,dbConfig,"single"))
app.use(cors({
  origin:"*"
}))
app.use('/',routes)
app.get('/', (req, res) => {
  res.send('Hello World!')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
