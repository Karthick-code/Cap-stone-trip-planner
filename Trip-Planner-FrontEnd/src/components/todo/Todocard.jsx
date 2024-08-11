import { Card, CardContent, Typography,Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

function Todocard({todo}) {
    const handlesubmit=()=>{
        console.log(todo._id)
    }
  return (
    <>
    
    <div className="col-md-4 col-sm-5">
        <Card >
            <CardContent> 
                <Typography ><b>Title:</b> {todo.title}</Typography>
                <Typography ><b>Description:</b> {todo.description}</Typography>
                <div className="button">
                    <Button variant="outlined" component={Link} to={"/addtodo"}>Edit</Button>
                    <Button variant="outlined" onClick={handlesubmit}>Delete</Button>
                </div>
            </CardContent>
        </Card>
    </div>
    </>
    
  );
}

export default Todocard;
