import styles from './App.module.css';
import { useState } from "react";
import { Task } from "./Task"

function App() {
  

  const [toDoList, setToDoList] = useState([]); 
  const [newTask, setNewTask] = useState('');


  const handleChange = (event) => {
    setNewTask(event.target.value); 
  };


  const addToList1 = () => {
    const task= {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id + 1,
      taskName: newTask,
      completed: false
    }
    const valueToAdd = [...toDoList, task];
    setToDoList(valueToAdd);
  };


  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => {
      return (task.id === id) ? false : true;
    })
    setToDoList(newToDoList);
  }

  const completeTask= (id) => {
      setToDoList(toDoList.map((task) => {
        if(task.id === id) {
          return {...task, completed : true};
        }
        else {
          return task;
        }
      }))
  }

  return (
    <div className={styles.App}>

      <div className={styles.addTask}>
        <input value={newTask} onChange={handleChange} /> 
        <button onClick={addToList1}>Add Task</button>
      </div>


      <div className={styles.list}>
        {toDoList.map((task, index) => {
          return (
            <Task 
              taskName = {task.taskName}
              id = {task.id}
              completed = {task.completed}
              deleteTask = {deleteTask}
              completeTask = {completeTask}
            />
          );
})}
      </div>
      

    </div>
  );
}

export default App;
