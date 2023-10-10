import React, { useState ,useEffect} from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Fcompage() {

  const nav=useNavigate();
const [st,setst]=useState(false)


const [status1,setmsg]=useState([])
const MINUTE_MS = 1000;
useEffect(() =>{
   const interval = setInterval(() => {
    
    axios.get('http://localhost:5000/authstat',{
         
  }).then(res => setmsg(res.data.states)).catch((err) => console.log(err))
console.log("jjj")


}, MINUTE_MS);

return () => clearInterval(interval);

},[])
console.log(status1)


function back(){
nav('/')
}

  return (
    <div className='imag2'>
        <div>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{color:"red",backgroundColor:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <center>hill trafic</center>
          </Typography>
          <Button color="inherit" onClick={back}>back</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
<br></br>
<div class="mt-4 p-4  text-white text-center">
   <br></br>
<div class="row">
<center>
  <div class="col-sm-4 p-3  pseudo">
     <h5 class="display-6" style={{color:"orange"}}><small>Road</small></h5>
    <h style={{color:"orange"}}>Koli Hill Road, Tamil Nadu </h>
<h style={{color:"orange"}}>The road begins at Kalappanaickenpatti. Kolli Malai, </h>
<h style={{color:"orange"}}></h>
    </div>
  
  <br></br>
  
 
  <div class="col-sm-4 pseudo"><h5 class="display-6" style={{color:"orange"}}><small>Status of road</small></h5>
    
<Box
      sx={{      
    width:350,
        backgroundColor: 'white',
        opacity: 1,
        borderRadius:20,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 1
        },
      }}
>


  {status1==="0"? <div><h style={{color:"orange"}} >the road is in good condtion and have no hill rocks in the way and no block</h> 
  <h>It is varified by the authority </h>
  <br></br>
 <div><TaskAltIcon   sx={{ fontSize: 55 ,color:"green"}}/></div> 
  </div>
  
  :   <div><h style={{color:"orange"}} > It is sad to inform that the road is in not good condtion and have some hill rocks in the way and road is blocked</h> 
  <h>It is varified by the authority </h>

  <br></br>
 <div><HighlightOffIcon  sx={{ fontSize: 55 ,color:"red"}} /></div> 
  </div>

}
</Box>

  </div>
  </center>
</div>
 </div>

</div>

  )

}
export default Fcompage