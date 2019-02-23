import React, { useState, useEffect } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo}) {
return  <div style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
    {todo.text} 
    <div>
      <button onClick={() => completeTodo(index)}>done</button>
      <button onClick={() => deleteTodo(index)}>x</button>

    </div>
    </div>
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault() 
    if(!value) return;
    addTodo(value)
    setValue('')
  }

  return <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      className="input" 
      placeholder="Add Todos .." 
      value={value} 
      onChange={e => setValue(e.target.value)} />
    </form>
}

function App() {
  const initialTodos = localStorage.getItem("_todos") ? JSON.parse(localStorage.getItem("_todos")) : [
    {text: "Learn React Hooks", isCompleted: false}, 
    {text: "Make Coffe", isCompleted: false}, 
    {text: "Make a ToDo App", isCompleted: false} 
  ] 
  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    localStorage.setItem("_todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = text => {
    const newTodos = [...todos, { text }] 
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos] 
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos] 
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/> 
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    )
}

export default App
