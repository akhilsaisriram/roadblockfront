import React, { useState,useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { green } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { autha } from "./firebase.config";
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import WarningIcon from '@mui/icons-material/Warning';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import main from './main.jpg'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({presentUser}) {

  const [status1,setmsg]=useState([])
  const MINUTE_MS = 500;
  useEffect(() =>{
     const interval = setInterval(() => {
      
      axios.get('http://localhost:5000/fcom',{
         
    }).then(res => setmsg(res.data)).catch((err) => console.log(err))
  console.log("jjj")
  

}, MINUTE_MS);
  
return () => clearInterval(interval);

},[])
console.log(status1)


const onsub= async e=>{

  e.preventDefault();

  axios.post('http://localhost:5000/on',{username:"fcom", states:"1"}).then(res => alert("the alert is circulated")).catch((err) => console.log(err))


                
}

const onsub1= async e=>{

  e.preventDefault();

  axios.post('http://localhost:5000/off',{username:"fcom", states:"1"}).then(res => alert("the alert is cleared")).catch((err) => console.log(err))


                
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
///////
localStorage.setItem('uid',presentUser.uid);
localStorage.setItem('user_name',presentUser.email);
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
  setMobileMoreAnchorEl(event.currentTarget);
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>{presentUser.email}</MenuItem>
    <MenuItem onClick={() => autha.signOut()}>signout</MenuItem>
    <MenuItem onClick={onsub1}>off alert</MenuItem>
  </Menu>
);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

/////////
const background = {
  backgroundImage: `url(${main})`,
  height: "670px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};


////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    
    <div style={background}>
       
    <Box sx={{ display: 'flex' }}>
      <CssBaseline  />
      <AppBar  color="primary"  position="fixed" open={open}>
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
      <div>
 <h class="display-6" style={{textalign: "center"}}> hi:  {presentUser.email.replace('@gmail.com','')} </h>    
   </div>
     
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {renderMobileMenu}
      {renderMenu}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>


      
      <Main open={open}>
        <DrawerHeader />
        <Navbar bg="dark" variant="dark">
        <Container className="text-center">
          
          <Nav className="me-auto "style={{marginLeft:450}} >
            <Nav.Link href="Dashbord/Emical" ></Nav.Link>

            <Nav.Link><Link to={`/Hlc`}></Link></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
   <h3>Road detals </h3>
   <br></br>
   <p>
   <Box
      sx={{      
        height: 78,     
        marginTop:0,
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >
      {
      status1===0 ?<div>
All roads in the hill  has no problums still now and all sensors are in working condition and no complaints till now by peoples 


<div><TaskAltIcon   sx={{ fontSize: 55 ,color:"green"}}/></div> 

      </div>:<div>
     A road in the hill has some bloackage and the sensors are in working condtion please varifiy about the condition to distribule circular to main webpage
<br></br>
     <Button variant="outlined" onClick={onsub}>Verify</Button>
     <br></br>
<h>the road is not yet cleared</h>
      </div>

      }
  


   </Box>
<br></br><br></br><br></br>
   <Box
      sx={{      
        height: 159,     
        marginTop:0,
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >
   <h5 class="display-6" style={{color:"orange"}}><small>Problums on road:</small></h5>

{

status1===0 ?<div>
<h>no problums</h>
  <div><TaskAltIcon   sx={{ fontSize: 55 ,color:"green"}}/></div> 
  
</div>:<div>
<h>Problum</h>
<div><WarningIcon sx={{ fontSize: 55 ,color:"red"}}/></div>

</div>

}

   </Box>
   </p>
 
 
      </Main>
    </Box>

    
<div>


</div>



    </div>
  );
}
