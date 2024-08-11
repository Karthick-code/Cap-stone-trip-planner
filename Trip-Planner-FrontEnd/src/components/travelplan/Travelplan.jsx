import React from 'react'
import AuthContext from '../../context/AuthContext'
import { useContext ,useState,useEffect} from 'react'
import http from "../../../utils/http";
import { Button } from '@mui/material';
import  { useNavigate } from 'react-router-dom';
// import {Link} from '@mui/material';
import Addtravel from './Addtravel';

function Travelplan() {
  const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [plans,setPlans]=useState([]);
  useEffect(()=>{
    http.get("/travelplan").then((res)=>{
      setPlans(res.data)
    })
  },[])
  return (
    <>
    {user?((plans.length!==0)?(
      plans.map((plan)=>{
        return(
          <div>
            <h1>{plan.title}</h1>
            <p>{plan.description}</p>
            <p>{plan.startDate}</p>
            <p>{plan.endDate}</p>
            <p>{plan.destination}</p>
            <p>{plan.budget}</p>
            <p>{plan.activities}</p>
            <p>{plan.accommodation}</p>
            <p>{plan.transportation}</p>
            <p>{plan.notes}</p>
            <Button onClick={()=>navigate("/addtravel")
            }>Add new Travel</Button>
          </div>
          
        )
      })):(
        <div>
          <h4>No plans found</h4>
          <Button onClick={()=>navigate("/addtravel")}>Add new Travel</Button>
        </div>
      )
    ):(navigate("/login"))
  }</>
    
  )
}

export default Travelplan