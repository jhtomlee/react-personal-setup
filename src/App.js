import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProTip from './components/ProTip';
import AppBar from './components/AppBar';

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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Container maxWidth="false">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            My React Set-up
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default App;
