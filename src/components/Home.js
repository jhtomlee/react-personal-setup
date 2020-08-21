import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/jhtomlee/react-personal-setup"
        target="_blank"
      >
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

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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

export default Home;
