import React from 'react';
import { Container, Typography, TextField, Button, ThemeProvider, createTheme } from '@mui/material';

const ContactMePage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000',
      },
      background: {
        default: '#F0F0F0', 
      },
    },
    typography: {
      fontFamily: 'monospace',
      fontSize: 16,
      fontWeight: 'bold',
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: '#000', 
            },
            '&:hover fieldset': {
              borderColor: '#000', 
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000', 
            },
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', 
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xxl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: 'background.default', 
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: '1rem',
            color: '#000',
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '1rem' }}
            inputProps={{
              style: { fontSize: '1.2rem', color: '#000' },
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '1rem' }}
            inputProps={{
              style: { fontSize: '1.2rem', color: '#000' },
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            sx={{ marginBottom: '1rem' }}
            inputProps={{
              style: { fontSize: '1.2rem', color: '#000' },
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginBottom: '1rem',
              boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default ContactMePage;



