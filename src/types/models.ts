export interface Todo{
    id : number ,
    title : string ,
    deadline : string,
    completed : boolean
}

export interface TodoFromProps {
    addTodo : (title:string, deadline:string) => void,
    editingTodo : Todo | null
    updateTodo : ( id:number, title:string , deadline: string)=> void
}

export interface TodoListProps {
  todos: Todo[],
  deleteTodo : (id:number)=> void,
  toggleComplete : (id:number)=> void,
  editTodo : (todo: Todo)=> void
}