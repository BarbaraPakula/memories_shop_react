import React from 'react';
// import styles from './Header.module.scss';

import { makeStyles } from '@material-ui/core/styles';

import { ShoppingCart } from '@material-ui/icons';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            aria-label="Show homepage"
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <AcUnitIcon
              color="secondary"
              edge="start"
              fontSize="large"
            ></AcUnitIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Selling memories
          </Typography>
          <MenuItem>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={'10'} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;