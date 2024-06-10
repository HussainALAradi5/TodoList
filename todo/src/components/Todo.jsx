import { useState } from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState([
    'play video games',
    'study',
    'practice',
    'sleep'
  ])
  const [newTask, setNewTask] = useState('')
  const handleInputChange = (event) => {
    const target = event.target.value
    setNewTask(target)
    console.log(target)
  }
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])

      setNewTask('')
    }
  }
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, keyIndex) => keyIndex !== index)
    setTasks(updatedTasks)
  }
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks]
      ;[updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index]
      ] //swap the 2 value location
      setTasks(updatedTasks)
    }
  }
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]
      ;[updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index]
      ] //swap the 2 value location
      setTasks(updatedTasks)
    }
  }

  return (
    <div className="todo">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="enter task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add" onClick={addTask}>
          add new task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => removeTask(index)}>
              delete
            </button>
            <button className="up" onClick={() => moveTaskUp(index)}>
              ☝
            </button>
            <button className="down" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default Todo
