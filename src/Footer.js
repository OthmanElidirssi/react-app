import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1B1B1B',
        fontFamily: 'monospace',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      
      <a href='https://github.com/OthmanElidirssi'><GitHubIcon style={{ color: '#fff', marginRight: '1rem' }} /></a>
      <a href='https://www.linkedin.com/in/othman-el-idrissi-2b3132275/'><LinkedInIcon style={{ color: '#fff', marginRight: '1rem' }} /></a>
      <a href='https://www.instagram.com/'><InstagramIcon style={{ color: '#fff' }} /></a>
    </footer>
  );
};

export default Footer;
