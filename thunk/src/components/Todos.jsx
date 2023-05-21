import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import {    getTaskFailure,getTaskRequest,
  getTasksSuccess,getTasks
} from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
const Todos = () => {

  const dispatch=useDispatch()
  const todos=useSelector((state) => state.todos)


  
  useEffect(() => {
    if(todos.length === 0)
    {
      // getTasks(dispatch)
      dispatch(getTasks)
    }
    
  },[])

  console.log(todos)
  return (
    <>
    <div>
        <h1>Todos</h1>
    </div>

    <TodoInput  getTasks={getTasks}/>
    {  todos.length > 0 && 
    todos.map((item) => {
      return(
        <div key={item.id}>
          {item.title} -
          {item.status  ? "True" : "False"} 
        </div>
      )
    }) }
    </>
  )
}

export default Todos