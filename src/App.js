import Formulario from "./components/Formulario";
import Task from "./components/Task";
import React, { useState, useEffect } from 'react'

function App() {

  let initialTasks = JSON.parse(localStorage.getItem('tasks'));
  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks)

  useEffect(() => {
    let initialTasks = JSON.parse(localStorage.getItem('tasks'));

    if (initialTasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, [tasks]);

  const addTask = task => {
    setTasks([...tasks, task])
  }

  const deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const updateTask = id => {
    tasks.forEach(task => {
      if (task.id === id) {
        task.isTasty = !task.isTasty
      }
    });
    setTasks(tasks)
  }

  return (
    <>
      <div className="container mx-auto mt-3 text-center">
        <h1 className="">TO DO</h1>
        <Formulario
          addTask={addTask}
        />
        <div>
          {tasks.length === 0 ? <h3>Add your Task</h3> :
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
