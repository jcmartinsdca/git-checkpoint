const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => res.send('Hello World test 2'))

app.listen(port, () => console.log('example app listening at http://localhost:$[port]'))