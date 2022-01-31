import React, { useState } from 'react';
import {AppBar,Box,Toolbar,IconButton ,Typography,Menu ,InputBase, Link} from '@mui/material/';
import { styled, alpha,createTheme,ThemeProvider  } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    console.log('handleOpenNavMenu')
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={icommerce}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/**MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
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
              <Link href="/Seasons" color="inherit" underline="hover" 
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx:1, color: 'black', display: 'block' }} textAlign="center"
                >Seasons</Link>                
              <Link href="/episodes/all" color="inherit" underline="hover" 
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx:1, color: 'black', display: 'block' }} textAlign="center"
                >Episodes</Link>
              <Link href="/characters" color="inherit" underline="hover" 
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx:1, color: 'black', display: 'block' }} textAlign="center"
                >Characters</Link>
            </Menu>
          </Box>
          {/**END MOBILE */}
          <Link href="/" color="inherit" underline="none"
            onClick={handleCloseNavMenu}
            sx={{ my: 3, mx:1, color: 'success', display: 'block' }} textAlign="center">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block' } }}
              >Peer39</Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
             <Link href="/Seasons" color="inherit" underline="hover" 
              onClick={handleCloseNavMenu}
              sx={{ my: 3, mx:1, color: 'white', display: 'block' }}
              >Seasons</Link>
             <Link href="/episodes/all" color="inherit" underline="hover" 
              onClick={handleCloseNavMenu}
              sx={{ my: 3, mx:1, color: 'white', display: 'block' }}
              >Episodes</Link>
             <Link href="/characters" color="inherit" underline="hover" 
              onClick={handleCloseNavMenu}
              sx={{ my: 3, mx:1, color: 'white', display: 'block' }}
              >Characters</Link>
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
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
/***
.palette.primary
.palette.secondary
.palette.error
.palette.warning
.palette.info
.palette.success */

const icommerce = createTheme({
  palette: {
    primary: {
      main: '#31708E',
    },
    secondary: {
      main: '#5085A5',
      contrastText: '#ffcc00',
    },
    // error:{
    //   main: '#687864'
    // },
    info:{
      main: '#2E9CCA'
    },
    success:{
      main: '#E7717D'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
