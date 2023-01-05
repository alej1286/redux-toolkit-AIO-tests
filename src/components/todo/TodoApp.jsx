import React, { useState } from 'react'
import { useGetTodosQuery,useGetTodoByIdQuery } from '../../app/api/todosApi'

export const TodoApp = () => {
  

  const [todoId, setTodoId] = useState(1)
 const {data:todos =[],isLoading} = useGetTodosQuery();
 const {data:todo,isLoading2} = useGetTodoByIdQuery(todoId);
 return (
    <>  
    
    <div>TodosApp - RTK Query</div>
    <hr />
    <h4>isLoading: {isLoading ? 'True':'False'}</h4>
    <button onClick={()=>{
      setTodoId(todoId+1)
    }}>Next todo Id</button>
    <pre>{JSON.stringify(todo)}
    </pre>
    <ul>
      {
        todos.map((todo)=>(
          <li key={todo.id}>
            <strong>{todo.completed ? 'done':'pending'}</strong>
            {todo.title}
          </li>
        ))
      }
    </ul>

    </>
  )
}
