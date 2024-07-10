import { useState } from 'react'


export function NewTodoForm({addTodo}){
    const [newItem, setNewItem] =useState("")
    // const [todos,setTodos]=useState([])
    function handleSubmit(e){
        e.preventDefault()
        if (newItem ==="") return
        addTodo(newItem)
        setNewItem('')
      }
    
    return (
        

    <form onSubmit={handleSubmit} className='new-item-form'>
    
      <div className='form-row'>
        <label htmlFor='item'>
        New item
        </label>
        <input value={newItem} 
          onChange={e => setNewItem(e.target.value)}
          type='text' id='item'></input>
      </div>
      <button className='btn'>Add</button>
    </form>
    )
}