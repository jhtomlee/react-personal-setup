import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';
import ProTip from './components/ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        jhtomlee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          My React Set-up
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
