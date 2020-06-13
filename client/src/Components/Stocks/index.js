//Main holder for Userdashboard 

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { mainListItems, secondaryListItems } from '../SideNavbar/index';
import StockComponent from './StockComponent/index';
import Portfolio from '../Portfolio/index';
import SearchBar from '../SearchBar/index';
import DashboardFooter from '../DashboardFooter/index';

import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../SideNavbar/index';
import StockComponent from '../StockComponent';
import Portfolio from '../Portfolio/index'
import CandleStick from '../CandleStick';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 250,
  },
  
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);



  
  const Ddata = [{
    x: new Date(1538778600000),
    y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  {
    x: new Date(1538780400000),
    y: [6632.01, 6643.59, 6620, 6630.11]
  },
  {
    x: new Date(1538782200000),
    y: [6630.71, 6648.95, 6623.34, 6635.65]
  },
  {
    x: new Date(1538784000000),
    y: [6635.65, 6651, 6629.67, 6638.24]
  },
  {
    x: new Date(1538785800000),
    y: [6638.24, 6640, 6620, 6624.47]
  },
  {
    x: new Date(1538787600000),
    y: [6624.53, 6636.03, 6621.68, 6624.31]
  },
  {
    x: new Date(1538789400000),
    y: [6624.61, 6632.2, 6617, 6626.02]
  },
  {
    x: new Date(1538791200000),
    y: [6627, 6627.62, 6584.22, 6603.02]
  },
  {
    x: new Date(1538793000000),
    y: [6605, 6608.03, 6598.95, 6604.01]
  },
  {
    x: new Date(1538794800000),
    y: [6604.5, 6614.4, 6602.26, 6608.02]
  },
  {
    x: new Date(1538796600000),
    y: [6608.02, 6610.68, 6601.99, 6608.91]
  },
  {
    x: new Date(1538798400000),
    y: [6608.91, 6618.99, 6608.01, 6612]
  },
  {
    x: new Date(1538800200000),
    y: [6612, 6615.13, 6605.09, 6612]
  },
  {
    x: new Date(1538802000000),
    y: [6612, 6624.12, 6608.43, 6622.95]
  },
  {
    x: new Date(1538803800000),
    y: [6623.91, 6623.91, 6615, 6615.67]
  },
  {
    x: new Date(1538805600000),
    y: [6618.69, 6618.74, 6610, 6610.4]
  },
  {
    x: new Date(1538807400000),
    y: [6611, 6622.78, 6610.4, 6614.9]
  },
  {
    x: new Date(1538809200000),
    y: [6614.9, 6626.2, 6613.33, 6623.45]
  },
  {
    x: new Date(1538811000000),
    y: [6623.48, 6627, 6618.38, 6620.35]
  },
  {
    x: new Date(1538812800000),
    y: [6619.43, 6620.35, 6610.05, 6615.53]
  },
  {
    x: new Date(1538814600000),
    y: [6615.53, 6617.93, 6610, 6615.19]
  },
  {
    x: new Date(1538816400000),
    y: [6615.19, 6621.6, 6608.2, 6620]
  },
  {
    x: new Date(1538818200000),
    y: [6619.54, 6625.17, 6614.15, 6620]
  },
  {
    x: new Date(1538820000000),
    y: [6620.33, 6634.15, 6617.24, 6624.61]
  },
  {
    x: new Date(1538821800000),
    y: [6625.95, 6626, 6611.66, 6617.58]
  },
  {
    x: new Date(1538823600000),
    y: [6619, 6625.97, 6595.27, 6598.86]
  },
  {
    x: new Date(1538825400000),
    y: [6598.86, 6598.88, 6570, 6587.16]
  },
  {
    x: new Date(1538827200000),
    y: [6588.86, 6600, 6580, 6593.4]
  },
  {
    x: new Date(1538829000000),
    y: [6593.99, 6598.89, 6585, 6587.81]
  },
  {
    x: new Date(1538830800000),
    y: [6587.81, 6592.73, 6567.14, 6578]
  },
  {
    x: new Date(1538832600000),
    y: [6578.35, 6581.72, 6567.39, 6579]
  },
  {
    x: new Date(1538834400000),
    y: [6579.38, 6580.92, 6566.77, 6575.96]
  },
  {
    x: new Date(1538836200000),
    y: [6575.96, 6589, 6571.77, 6588.92]
  },
  {
    x: new Date(1538838000000),
    y: [6588.92, 6594, 6577.55, 6589.22]
  },
  {
    x: new Date(1538839800000),
    y: [6589.3, 6598.89, 6589.1, 6596.08]
  },
  {
    x: new Date(1538841600000),
    y: [6597.5, 6600, 6588.39, 6596.25]
  },
  {
    x: new Date(1538843400000),
    y: [6598.03, 6600, 6588.73, 6595.97]
  },
  {
    x: new Date(1538845200000),
    y: [6595.97, 6602.01, 6588.17, 6602]
  },
  {
    x: new Date(1538847000000),
    y: [6602, 6607, 6596.51, 6599.95]
  },
  {
    x: new Date(1538848800000),
    y: [6600.63, 6601.21, 6590.39, 6591.02]
  },
  {
    x: new Date(1538850600000),
    y: [6591.02, 6603.08, 6591, 6591]
  },
  {
    x: new Date(1538852400000),
    y: [6591, 6601.32, 6585, 6592]
  },
  {
    x: new Date(1538854200000),
    y: [6593.13, 6596.01, 6590, 6593.34]
  },
  {
    x: new Date(1538856000000),
    y: [6593.34, 6604.76, 6582.63, 6593.86]
  },
  {
    x: new Date(1538857800000),
    y: [6593.86, 6604.28, 6586.57, 6600.01]
  },
  {
    x: new Date(1538859600000),
    y: [6601.81, 6603.21, 6592.78, 6596.25]
  },
  {
    x: new Date(1538861400000),
    y: [6596.25, 6604.2, 6590, 6602.99]
  },
  {
    x: new Date(1538863200000),
    y: [6602.99, 6606, 6584.99, 6587.81]
  },
  {
    x: new Date(1538865000000),
    y: [6587.81, 6595, 6583.27, 6591.96]
  },
  {
    x: new Date(1538866800000),
    y: [6591.97, 6596.07, 6585, 6588.39]
  },
  {
    x: new Date(1538868600000),
    y: [6587.6, 6598.21, 6587.6, 6594.27]
  },
  {
    x: new Date(1538870400000),
    y: [6596.44, 6601, 6590, 6596.55]
  },
  {
    x: new Date(1538872200000),
    y: [6598.91, 6605, 6596.61, 6600.02]
  },
  {
    x: new Date(1538874000000),
    y: [6600.55, 6605, 6589.14, 6593.01]
  },
  {
    x: new Date(1538875800000),
    y: [6593.15, 6605, 6592, 6603.06]
  },
  {
    x: new Date(1538877600000),
    y: [6603.07, 6604.5, 6599.09, 6603.89]
  },
  {
    x: new Date(1538879400000),
    y: [6604.44, 6604.44, 6600, 6603.5]
  },
  {
    x: new Date(1538881200000),
    y: [6603.5, 6603.99, 6597.5, 6603.86]
  },
  {
    x: new Date(1538883000000),
    y: [6603.85, 6605, 6600, 6604.07]
  },
  {
    x: new Date(1538884800000),
    y: [6604.98, 6606, 6604.07, 6606]
  }]


  const [company, setCompany] = useState({})
  const [stock, setStock] = useState({})
  
    useEffect(() => {
      async function load(){
        const stockss = await loadStocks();
        await searchStocks(stockss)
      }
      load();
    }, [])
  
  function loadStocks(){
    return API.getAllStocks()
      .then(res => {
        setStock(res.data)
        return(res.data)
      })
      .catch(err => console.log(err));
    };
      
   async function searchStocks(stockss){ 
    await API.getStockPrices(stockss)
      .then(res =>{
        setCompany(res.data)})
      .catch(err => console.log(err));
  }


  console.log(stock)





  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="teal"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          <IconButton color="inherit">
            <Badge >
            <img alt="" src={ require("../../utils/images/coin.png")} className={classes.large} color ="primary"/>
            </Badge>
          </IconButton>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Coins N' Stockin'
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge color="secondary">
              <ExitToAppIcon/> Logout
            </Badge>
          </IconButton>

          
          
        </Toolbar>
      </AppBar>

      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        
      >
        <div className={classes.toolbarIcon}>
          <IconButton  onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>


      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing ={6} justify="flex-end">

            <Grid item>

              <Paper>
                <SearchBar/>
                <CandleStick chartData={Ddata} />
              </Paper>

              
            </Grid>
          </Grid>


          <Grid container spacing = {6}>
            {/* Chart.js with stocks */}

            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <Portfolio />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <Paper className={fixedHeightPaper}>
                <StockComponent />
              </Paper>
            </Grid>

          </Grid>
          
        </Container>
        <DashboardFooter/>

      </main>
    </div>
  );
}