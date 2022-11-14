const express = require('express')
const cors = require('cors')
const miruta = require('./routes/todo.routes')
const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', miruta)


app.listen(4000, () => {
    console.log('server on port 4000')
})