import { useState } from 'react'

export function Todolist({todos,toggleTodo,deleteTodo}){
    // const [todos,setTodos]=useState([])
    
    //   function deleteTodo(props){
    //     props.deleteTodo(props.todo.id)
    //   }
    // function toggleTodo(props){
    //     props.toggleTodo(...props.todo, props.completed)
      
    // }
    return (
        <>
            <h1 className='header'>Todo List</h1>
            <ul className='list'>
            {todos.length==0 && "No todo"}
            {todos.map(todo =>{
                return (
                <li key={todo.id}>
                    <label>
                    <input type='checkbox' checked={todo.completed}
                        onChange={e => toggleTodo(todo.id,e.target.checked)}/>
                    {todo.title}
                    </label>
                    <button onClick={()=>deleteTodo(todo.id)}
                    className='btn btn-danger'>Delete</button>
                </li>
                )
            })}
            
            </ul>
        </>
    )

}