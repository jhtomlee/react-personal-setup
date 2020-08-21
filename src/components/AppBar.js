import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Welcome!
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="home" href="/">
          <HomeIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="profile"
          href="/profile"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
