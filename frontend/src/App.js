import Formulario from "./components/Formulario";
import Task from "./components/Task";
import React, { useState, useEffect } from 'react'
import axios from "axios";

function App() {

  // let initialTasks = JSON.parse(localStorage.getItem('tasks'));

  

  
  // if (!initialTasks) {
    //   initialTasks = [];
    // }
    
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
      const getTasks = async () => {
        const { data } = await axios.get('http://localhost:4000/api/gettasks')
        setTasks(data)
      }
      getTasks()
    })
  // useEffect(() => {
  //   let initialTasks = JSON.parse(localStorage.getItem('tasks'));

  //   if (initialTasks) {
  //     localStorage.setItem('tasks', JSON.stringify(tasks))
  //   } else {
  //     localStorage.setItem('tasks', JSON.stringify([]));
  //   }
  // }, [tasks]);

  const addTask = task => {
    setTasks([...tasks, task])
    const postTask = async() => {
      let data = {
        id: task.id,
        isTasty: task.isTasty,
        task: task.task
      }
      const res = await axios.post('http://localhost:4000/api/addtask', data)
      console.log(res.data.msg);
    }
    postTask()
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
