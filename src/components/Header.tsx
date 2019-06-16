import React    from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import HomeRounded from '@material-ui/icons/HomeRounded';
import CreateRounded from '@material-ui/icons/CreateRounded';

import { routes } from './../routes/routes';

const useStyles = makeStyles((theme: Theme) => { 
  return {
    root: {
      color: theme.palette.primary.dark
    },
    nav: {
      background: theme.palette.primary.contrastText
    }
}});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <BottomNavigation showLabels className={classes.nav}>
      <BottomNavigationAction
          component={Link}
          to={routes[0].path}
          label="Home"
          value="home"
          icon={<HomeRounded />}
          className={classes.root}
      />
      <BottomNavigationAction
          component={Link}
          to={routes[1].path}
          label="Create Incident"
          value="create"
          icon={<CreateRounded />}
          className={classes.root}
      />
  </BottomNavigation>
  )
}

export default Header;