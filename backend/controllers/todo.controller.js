const todos = require('../models/todos.json')

const getTasks = (req, res) => {
    res.json(todos)
}

const postTask = (req, res) => {
    const { id, isTasty, task } = req.body
    console.log(req.body)
    const newTask = {
        id,
        isTasty,
        task
    }
    todos.push(newTask)
    res.json({ msg: 'creado' }).status(201)
}

module.exports = {
    getTasks,
    postTask
}