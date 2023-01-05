import React from 'react'
import { useGetTodosQuery } from '../../app/api/todosApi'

export const TodoApp = () => {
 const {data:todos =[],isLoading} = useGetTodosQuery();
  return (
    <>  
    
    <div>TodosApp - RTK Query</div>
    <hr />
    <h4>isLoading: {isLoading ? 'True':'False'}</h4>
    <pre>...
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
