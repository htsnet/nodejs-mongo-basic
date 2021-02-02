const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World, it´s me!')
})

app.get('/mensagens', function(request, response) {
    response.send('Exibir todas as mensagens!')
})

app.listen(3000)
