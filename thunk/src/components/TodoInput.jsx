import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  addTaskFailure,addTaskRequest,addTasksSuccess
}  from "../Redux/action"


const TodoInput = ({getTasks}) => {
  
  const dispatch=useDispatch()
  const [task,setTask]=useState("")

  const addTodo=() => {
    if(task){
      const payload={
        title:task,
        status:false
      }
      dispatch(addTaskRequest())
        return axios
       .post('http://localhost:8080/todos',payload)
      .then((r) => {
        dispatch(addTasksSuccess(r.data))
      })
      .catch((e)=> {
        dispatch(addTaskFailure(e))
      })
    }
  }
const hendleAdd=()=>{
  addTodo().then(() => {
getTasks(dispatch)
  })
}
  return (
    <div>
      <input
       type="text" placeholder='Enter Task'
       value={task}
       onChange={(e) => {setTask(e.target.value)}}
       />
      <button onClick={hendleAdd} >Add Task</button>
    </div>
  )
}
export default TodoInput