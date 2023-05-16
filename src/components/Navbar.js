import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={3} style={{ backgroundColor: '#1B1B1B' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" style={{ color: 'white' }}>
          <MenuIcon />
        </IconButton>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{scale:1.01}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 ,fontWeight:'bold',fontFamily:'monospace'}}>
          <Link to="/" style={{
            textDecoration:'none',
            color:"white"
          }}>
            Home
          </Link>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{scale:1.01}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 ,fontWeight:'bold',fontFamily:'monospace'}}>
          <Link to="/about" style={{
            textDecoration:'none',
            color:"white"
          }}>
            About
          </Link>
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{scale:1.01}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 ,fontWeight:'bold',fontFamily:'monospace'}}>
          <Link to="/portfolio" style={{
            textDecoration:'none',
            color:"white"
          }}>
            Projects
          </Link>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{scale:1.01}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 ,fontWeight:'bold',fontFamily:'monospace'}}>
          <Link to="/resume" style={{
            textDecoration:'none',
            color:"white"
          }}>
            Timeline
          </Link>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{scale:1.01}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 ,fontWeight:'bold',fontFamily:'monospace'}}>
          <Link to="/contact" style={{
            textDecoration:'none',
            color:"white"
          }}>
            Contact
          </Link>
          </Typography>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;






