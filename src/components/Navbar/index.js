import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {useSelector} from 'react-redux'
import CartComponent from '../CartComponent';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['Cakes', 'IceCreams', 'Chocolate', 'Flowers'];
const settings = ['Profile', ' My Account', 'My Orders', 'Logout'];
const delivery =['Home Delivery','Same day Delivery', 'Take away','Track Order']


function Navbar(props) {
  let totalcakes = useSelector((state)=>state.cake.orderedcakes)
  let totalicecreams = useSelector((state)=>state.icecream.orderedicecreams)
  let totalchocolates = useSelector((state)=>state.chocolate.orderedchocolates)
  let totalflowers = useSelector((state)=>state.flower.orderedflowers)
  
  let sum = totalcakes+ totalicecreams+totalchocolates+totalflowers

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElDel, setAnchorElDel] = React.useState(null);
  let badgeContent = props.badgeContent;
  let noOfCakes = useSelector((state)=> state.cake.orderedcakes)
  let numOficecreams = useSelector((state)=> state.icecream.orderedicecreams)
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenDeliveryMenu = (event) => {
    setAnchorElDel(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseDeliveryMenu = () => {
    setAnchorElDel(null);
  };

  return (
    <AppBar position="static" style={{backgroundImage:'linear-gradient(to right, #fc3003,#fc7f03,#fcdb03)'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Diversity2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Relish"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'fangsong',
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RELISH
          </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page}>
                   <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </Link>
               
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link to="/" style={{textDecoration:"none"}}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RELISH
          </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link to={page} style={{textDecoration:'none'}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textTransform:'capitalize', fontSize: '17px' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           <Box>
           <Tooltip title="Items in Cart">
            <Link to='cart'>
            <IconButton aria-label="cart">
             <CartComponent badgeContent = {sum}/>
             
               </IconButton>
            </Link>
           </Tooltip>
          
           </Box>
         
           <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Delivery">
              <IconButton onClick={handleOpenDeliveryMenu} sx={{ p: -3 }}>
              <Avatar alt="Remy Sharp" variant='square' src="https://assets.winni.in/img/icons/2-hour.svg"
                      sx={{ width: 40, height: 30 }}   />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '1px' }}
              id="menu-appbar"              
              anchorEl={anchorElDel}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElDel)}
              onClose={handleCloseDeliveryMenu}
            >
              {delivery.map((deliver) => (
                <MenuItem key={deliver} onClick={handleCloseDeliveryMenu}>
                  <Typography textAlign="center">{deliver}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Tooltip title="Home">
           <IconButton> 
          <HomeIcon/>
          </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar src="https://cdn.vectorstock.com/i/1000x1000/83/62/chef-woman-gesturing-ok-vector-20818362.webp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;