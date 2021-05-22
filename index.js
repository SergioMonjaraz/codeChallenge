const express = require('express')
const app = express()
const port = 3000

const methods = require('./fibonacci')

const response = {
    code: 200, 
    message: 'SUCCESS',
    response: null
}

app.get('/', (req, res) => res.send('Hello ControlHub!'))
app.listen(port, () => console.log(`Run on port ${port}`))

app.get('/fibonacci/:number', (req, res) => {
    if(!req.params.number || isNaN(Number(req.params.number))){
        response.code=400
        response.message='EL NUMERO ES OBLIGATORIO'
    }
    else{
        response.code = 200
        response.message = 'SUCCESS'
        response.response = methods.fibonacci(req.params.number)
    }
  res.send(response)
})

