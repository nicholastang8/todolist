import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NewTodoForm } from './NewTodoForm'
import { Todolist } from './Todolist'

function App() {
  const [todos,setTodos]=useState(
    ()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  }
)
  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])
  
  function addTodo(title){
    setTodos(currentTodos =>{
      return [
      ...currentTodos,
      {id:crypto.randomUUID(),title: title, completed: false},
    ]})
  }
  
  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo =>todo.id !==id)
    })
  }
 
  return (
  <>
    
    <NewTodoForm addTodo={addTodo}></NewTodoForm>
    <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></Todolist>
    
  </>
  )
}

export default App
