import * as types from "./actionType"
import axios from "axios"
const getTaskRequest=() => {

    return{
        type:types.GET_TODOS_REQUEST
    }
}

const getTasksSuccess=(payload) => {

    return{
        type:types.GET_TODOS_SUCCESS,
        payload,
    }
}


const getTaskFailure=(payload) => {

    return{
        type:types.GET_TODOS_FAILURE,
        payload,
    }
}

const addTaskRequest=() => {

    return{
        type:types.ADD_TODO_REQUEST
    }
}


const addTasksSuccess=(payload) => {

    return{
        type:types.ADD_TODO_SUCCESS,
        payload,
    }
}


const addTaskFailure=(payload) => {

    return{
        type:types.ADD_TODO_FAILURE,
        payload,
    }
}


const getTasks=(dispatch) => {
    dispatch(getTaskRequest())
    return axios.get('http://localhost:8080/todos')
    .then((r) => {
      dispatch(getTasksSuccess(r.data))
    
    })
    .catch((e)=> {
      dispatch(getTaskFailure(e))
    })
      }
      
export {
    getTaskFailure,getTaskRequest,getTasksSuccess,
    addTaskFailure,addTaskRequest,addTasksSuccess,
    getTasks,
}