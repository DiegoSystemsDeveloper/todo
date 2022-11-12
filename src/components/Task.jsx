import React, { useState } from 'react'

const Task = ({ task, deleteTask, updateTask }) => {

  const [isTasty, setIsTasty] = useState(task.isTasty)

  const handleChange = (e) => {
    setIsTasty(e.target.checked)
    updateTask(task.id)
  }

  return (
    <>
      <div className="custom-control custom-checkbox my-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id={task.id}
          checked={isTasty}
          onChange={handleChange}
        />

        <label
          className="custom-control-label"
          htmlFor={task.id}
        >
          <h5>
            {isTasty ? <del>{task.task}</del> : task.task}
          </h5>
        </label>

        <input
          type={'button'}
          value="Delete"
          className='btn btn-dark mx-3'
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </>
  )
}

export default Task