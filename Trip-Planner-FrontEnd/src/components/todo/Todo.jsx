import React from 'react'
import { useEffect,useState } from 'react';
import http from '../../../utils/http';
import Todocard from './Todocard';
import { Button } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';


function Todo() {
    const [todos, setTodos] = useState([]);
    const { user } = useContext(AuthContext);
   
    useEffect(() => {
        http.get(`/todo/${user._id}`)
        .then((res) => {
            setTodos(res.data);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
  return (
    <>
    <div className="row">
        {todos?todos.map((todo,index) => {
            return (
                <>
                <Todocard todo={todo} key={index}/>
                </>
            )
        }):(
        <>
        <h3><b>No todos yet</b></h3><br />
        <h3>create one:</h3><Button variant="outlined" href="/addtodo">Add Todo</Button>
        </>)}
    </div>
    </>
  )
}

export default Todo