import React, { useContext } from 'react'
import  AuthContext  from '../../context/AuthContext';
import { Paper, Typography, Avatar, Button } from "@mui/material"
import { Link } from 'react-router-dom';


function User() {
    const { user, logout } = useContext(AuthContext);
    return (
        <Paper style={{ padding: "16px" }}>
            <Avatar src={user.profilePicture} style={{ width: 60, height: 60, marginBottom: "16px" }} />
            <Typography variant="h6">{user.username}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Button variant="contained"  component={Link} to={"/update-user"}> Updateuser </Button>
            <Button onClick={logout} variant="contained" color="secondary"> Logout </Button>
        </Paper>
    )
}

export default User