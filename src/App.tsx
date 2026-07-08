import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useState } from 'react'
import type { Todo } from "./types/Todo"


function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [editingTodo, setEditingTodo] = useState< Todo | null>(null)

  function addTodo(title: string, deadline:string){
    const newTodo:Todo ={
      id: Date.now(),
      title,
      deadline,
      completed: false,
    
    }

    setTodos([...todos, newTodo])
  }

  function deleteTodo(id:number){
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  function toggleComplete(id:number){
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, completed : !todo.completed} : todo ))
  }
  function editTodo(todo: Todo){
    setEditingTodo(todo)
  }

  function updateTodo(id:number, title:string , deadline: string){
    setTodos(todos.map((todo)=>
      todo.id === id ? {...todo, title, deadline} : todo
    ))

    setEditingTodo(null)
  }

  return(
    <div className="container">
      <div className="todo-card">
        <h1>📝 Todo List</h1>

        <TodoForm addTodo={addTodo} editingTodo={editingTodo} updateTodo={updateTodo}/>

        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
      </div>
    </div>
  )
}

export default App
