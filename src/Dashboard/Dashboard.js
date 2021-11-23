import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from './Make Admin/MakeAdmin';
import Payment from './Payment/Payment';
import ManageServices from '../ManageServices/ManageServices';
import useAuth from '../hooks/useAuth';
import Profile from '../Profile/Profile';
import AddReview from './Add Review/AddReview';
import Menubar from '../Menubar/Menubar';
import AddService from '../AddService/AddService';
import ManageOrder from './ManageOrder/ManageOrder';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [admin, setAdmin ]= React.useState([]);
  const {user ,logOut }= useAuth();

  

  const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(()=>{
    fetch('https://pure-escarpment-37215.herokuapp.com/users')
         .then(res=>res.json())
        .then(data=>setAdmin(data));

  },[])






  

        const exactService =admin.filter(item=> item.useremail===user.email );
 console.log( exactService)

        const drawer = (
          <div>
            <Toolbar />
            <Divider />



          {
            exactService[0]?.useremail?


///..........................Admin ........................
<Box>
              
<Button variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
<Link to ={`${url}/makeAdmin`}> <Button color ='inherit'> Make a Admin</Button> </Link>
</Button>
<br /> <br />



<Button variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
<Link to ={`${url}/addService`}> <Button color ='inherit'> Add Service</Button> </Link>
</Button>
<br />  <br />



<Button variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
<Link to ={`${url}/manageService`}> <Button color ='inherit'> Manage Service</Button> </Link>
</Button>

<br />
<br />

<Button variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
<Link to ={`${url}/manageOrder`}> <Button color ='inherit'> Manage Order</Button> </Link>
</Button>

<br />
<br />

<Button  variant="contained" style={{ backgroundColor:'#000000' ,width:'100px'}}>
<Link to ={`${url}/logout`}> <Button onClick={logOut}  color='inherit'> Log Out</Button> </Link>
</Button>




</Box>




:

//...................Normal User..........................

<Box>

<Button variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
<Link to ={`${url}/profile`}> <Button color ='inherit'> My Order</Button> </Link>
</Button>

<br />
<br />

<Button variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
<Link to ={`${url}/payment`}> <Button color ='inherit'> Payment</Button> </Link>
</Button>

<br />
<br />


<Button  variant="contained" style={{ backgroundColor:'#000000' ,width:'100px',height:'50px', color:'white'}}>
  <Link to ={`${url}/addreview`}> <Button color ='inherit'> Add Review</Button> </Link>
</Button>

<br />
<br />

<Button  variant="contained" style={{ backgroundColor:'#000000' ,width:'100px'}}>
<Link to ={`${url}/addreview`}> <Button onClick={logOut} color ='inherit'> Log Out</Button> </Link>
</Button>


</Box>


          }
      
            <List>
              {[].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        );




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Menubar></Menubar>
       
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        
        <Route  path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
          
        </Route>

        <Route  path={`${path}/profile`}>
          <Profile></Profile>
          
        </Route>

        <Route  path={`${path}/addreview`}>
         <AddReview></AddReview>
          
        </Route>

        <Route  path={`${path}/manageOrder`}>
         <ManageOrder></ManageOrder>
          
        </Route>


        <Route  path={`${path}/addService`}>
         <AddService></AddService>
          
        </Route>


        <Route  path={`${path}/payment`}>
          <Payment></Payment>
          
        </Route>


        <Route  path={`${path}/manageService`}>
          <ManageServices></ManageServices>
          
        </Route>


       




        
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
