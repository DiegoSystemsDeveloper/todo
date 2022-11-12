import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({addTask}) => {

  const [task, setTask] = useState({task: ''})
  // const [error, setError] = useState(false)

  const actualizarState = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    task.id = uuidv4()
    task.isTasty = false

    addTask(task)

    setTask({ task:'' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="task"
            onChange={actualizarState}
            id="task"
            className='form-control'
            placeholder='Add task'
            value={task.task}
          />
        </div>
        <input
          type="submit"
          value="Add"
          className='btn btn-primary'
        />
      </form>
    </>
  )
}

export default Formulario