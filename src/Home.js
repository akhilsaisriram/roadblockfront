import React from 'react'
import bas from './lake-1802337.jpg'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Carousel from 'react-bootstrap/Carousel';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import clip from './WhatsApp Video 2023-03-30 at 9.33.18 PM.mp4'
import './App.css'
const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Fcompage");
  }
  const background = {
    backgroundImage: `url(${bas})`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
const background1 = {
  backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/08/05/54/agriculture-1807581_960_720.jpg")`,
  height: "400px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

  return (
    <div>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            <div ><h class="display-6"> Safe ride</h></div>
         
          </Typography>
         
          <ButtonGroup>
      

      <DropdownButton as={ButtonGroup} title="Login" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1"><Link style={{color: 'black'}} to='/Dashbord'  color='red'> Login to admin user</Link></Dropdown.Item>
       
      </DropdownButton>
      <DropdownButton as={ButtonGroup} title="Register" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1"><Link style={{color: 'black'}} to='/Reg'  color='red'>Register for user </Link></Dropdown.Item>
       
      </DropdownButton>
    </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>  
    <div style={background}>

<center>
<div>
<br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
<h3 class="display-6" style={{color:"white",fontweight: "bold",margin:100}}>Don't Play with your life, Its Precious. </h3>

</div>
</center>
    </div>

    <div class="mt-0 p-2 bg-dark text-white text-center">
    <div class="row">
  <div class="col-sm-6">
    <Carousel>
      <Carousel.Item interval={1000}>


      <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/6c478a3b-3a18-42c7-9ba7-a116dbbf78bc-jaw-dropping-pictures-of-the-worlds-most-dangerous-roads.jpg" alt="Italian Trulli" style={{width:500}}/>


        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://w0.peakpx.com/wallpaper/558/152/HD-wallpaper-dangerous-road-dangerous-road.jpg" alt="Italian Trulli" style={{width:460}}/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://in.musafir.com/uploads/medium_Kishtwar_Road_f45842bd39.png" alt="Italian Trulli" style={{width:600}}/>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

 
    <div class="col-sm-4">
    <h class="display-6"> Beautiful but dangerous</h>
    <br></br>
    <h > to avoid danger follow all road rules and check lights at corners of hill</h>
<br></br>
<h>and cheak if any block in the road ahead of travel on that road by click on this button</h>
<br></br>
<Button variant="outlined" style={{color:"red"}} onClick={handleClick}>status</Button>
<br></br>
<TouchAppIcon />
    </div>


    </div>
 
    </div>
    <div style={background1}>


<div>
<br></br>
      <br></br>
    
<br></br>
<div style={{"textAlign":"right",margin:20}}>
<h3 class="display-6" style={{color:"white",margin:20,fontweight: "bold","textAlign":"right"}}> This page is administrated by hill safity authority by government </h3>

  <h  style={{color:"white",fontweight: "bold"}}> All notices are varified by administration if any inadequacy found kindly contact us by mail </h>
</div>

</div>

    </div>
    <div class="mt-0 p-4 bg-dark text-white text-center">
   
    <p>contact us</p>
    <p> {<PhoneIcon/>}: 123456789</p>
    <p>{<MailIcon/>}:Fcom@gmail.com</p>
  </div>
  </div>
  )
}

export default Home