import { useState, useEffect } from "react";
import type { Todo } from "../types/Todo";

interface TodoFromProps {
    addTodo : (title:string, deadline:string) => void,
    editingTodo : Todo | null
    updateTodo : ( id:number, title:string , deadline: string)=> void
}

function TodoForm ({addTodo, editingTodo, updateTodo}: TodoFromProps){

    const [title, setTitle] = useState("")
    const [deadline, setDeadline]= useState("")

     useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title)
      setDeadline(editingTodo.deadline)
    }
  }, [editingTodo]);

    function handleSubmit(e : React.FormEvent){

        e.preventDefault()

        if(!title.trim() || !deadline){
            alert("plaease fill")
            return
        }
        if(editingTodo){
            updateTodo(editingTodo.id , title, deadline)
        }else {
            addTodo(title,deadline)
        }

        setTitle("")
        setDeadline("")
    }

    
    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter your task" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <input type="date" placeholder="Enter your task" value={deadline} onChange={(e)=> setDeadline(e.target.value)}/>
            <button type="submit">{editingTodo ? "Update Task" : "Add Task"}</button>

        </form>
    )
}

export default TodoForm;