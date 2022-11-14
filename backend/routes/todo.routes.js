const app = require('express')
const { postTask, getTasks } = require('../controllers/todo.controller')

const route = app.Router()

route.get('/gettasks', getTasks)
route.post('/addtask', postTask)

module.exports = route