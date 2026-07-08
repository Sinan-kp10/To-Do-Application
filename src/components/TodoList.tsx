import type { Todo } from "../types/Todo";

interface TodoListProps {
  todos: Todo[],
  deleteTodo : (id:number)=> void,
  toggleComplete : (id:number)=> void,
  editTodo : (todo: Todo)=> void
}

function TodoList({ todos, deleteTodo, toggleComplete, editTodo }: TodoListProps) {
  return (
    <div className="todo-list">

      {todos.length === 0 ? 

      (<h3>No Tasks Yet</h3>) : (

        todos.map((todo) => (

            <div key={todo.id} className="todo-item">

                <div className="todo-left">
                    <input type="checkbox" checked={todo.completed} onChange={()=> toggleComplete(todo.id)}/>
                </div>

                <div>

                    <h3>{todo.title}</h3>

                    <p>{todo.completed ? "✅ Completed" : `Deadline : ${todo.deadline}`}</p>

                </div>

                <div className="buttons">

                    <button onClick={()=> editTodo(todo)}>Edit</button>

                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>

                </div>

            </div>

        ))

      )}

    </div>
  );
}

export default TodoList;