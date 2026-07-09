import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
import type { Todo } from "./types/Todo"
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'


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
    toast.success(`"${title}" created successfully!`);
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
    toast.success(`"${title}" updated successfully!`);
    setEditingTodo(null)
  }

  useEffect(()=>{

    const today = new Date()

    todos.forEach((todo) => {

      const deadline = new Date(todo.deadline)

      if(!todo.completed  && deadline < today ){
        toast.warning(`${todo.title} is overdue!`)
      }
    })
  },[todos])

  return(
    <div className="container">
      <div className="todo-card">
        <h1>📝 Todo List</h1>

        <TodoForm addTodo={addTodo} editingTodo={editingTodo} updateTodo={updateTodo}/>

        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
      </div>
      <ToastContainer position="top-right" autoClose={3000}/>
    </div>
  )
}

export default App
