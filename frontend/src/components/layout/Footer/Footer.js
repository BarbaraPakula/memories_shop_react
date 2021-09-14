import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

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

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="inherit">
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
            Selling memories Copyright (C) All Rights Reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
