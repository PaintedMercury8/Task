import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { DropDownTools } from './DropDownTools/index.jsx';


const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function NavBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
        }}
      >
        <Container maxWidth={false} sx={{width:`98%`}}>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '18px',
              bgcolor:"white",
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
                mr:0,
              }}
            >
              <img
                src={
                  '/Pictures/Group.png'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{borderRight:`2px solid #000000`, opacity:`30%`,ml:2,display: { xs: 'none', md: 'flex'}}}>
                <MenuItem sx={{height:`20px`}}></MenuItem>
              </Box>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex',justifyContent:`space-between`,alignItems:"center",marginLeft:`10px`,marginRight:`10px`,width:`40%` } }}>
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '4px', px: '12px',backgroundColor:"#E1FF2B",borderRadius:`120px`,width:'15%',justifyContent:"center"}}
                >
                  <Typography  variant="body2" color="text.primary" sx={{fontWeight:"bold"}}>
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  
                  sx={{ py: '6px', px: '12px',width:'15%',justifyContent:"center"}}
                >
                  <DropDownTools/>
                </MenuItem>
                <MenuItem
                  
                  sx={{ py: '6px', px: '12px',width:'15%',justifyContent:"center" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Pricing
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: '6px', px: '12px',width:'15%',justifyContent:"center" }}
                >
                  <Typography variant="body2" color="text.primary">
                    About
                  </Typography>
                </MenuItem>
              </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
                paddingRight:`0px`
              }}
            >
              <Button
                variant="filled"
                size="Large"
                target="_blank"
                startIcon={<PermIdentityIcon/>}
                sx={{backgroundColor:`#E1FF2B`,color:`#000000`,textTransform:"capitalize",borderRadius:`15px`,height:`50px`,marginRight:'-16px'}}
              >
                Login
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    Features
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Testimonials
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    Highlights
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>
                    Pricing
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


export default NavBar;