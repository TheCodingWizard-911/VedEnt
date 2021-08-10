import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { green, pink } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandIcon from "@material-ui/icons/ExpandMore";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { borderRadius } from "@material-ui/system";

import VedEntDrawer from "../VedEntDrawer";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 90,
    width: "75%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    flexGrow: 1,
    fontSize: "2em",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
    },
  },
  navContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  navButton: {
    color: "white",
    fontWeight: 600,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 1),
    backgroundColor: pink.A400,
    borderRadius: theme.spacing(1),
    border: "none",
    "&:hover": {
      backgroundColor: green[400],
      color: "#FFF",
    },
  },
  lastButton: {
    marginRight: 0,
  },
  menuButton: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const VedEntAppBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>Ved Ent</div>
          <div className={classes.navContainer}>
            <Button variant="contained" className={classes.navButton}>
              Home
            </Button>
            <Button variant="contained" className={classes.navButton}>
              About
            </Button>
            <Button
              variant="contained"
              className={classes.navButton}
              endIcon={<ExpandIcon />}
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleOpen}
            >
              Services
            </Button>
            <Button variant="contained" className={classes.navButton}>
              Gallary
            </Button>
            <Button
              variant="contained"
              className={`${classes.navButton} ${classes.lastButton}`}
            >
              Contact
            </Button>
          </div>
          <Menu
            id="services-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem>Carpentry Works</MenuItem>
            <MenuItem>Civil Works</MenuItem>
            <MenuItem>Commercial Cleaning</MenuItem>
            <MenuItem>Corporate Technical</MenuItem>
            <MenuItem>Electrical Works</MenuItem>
            <MenuItem>Fabrication Works</MenuItem>
            <MenuItem>Flooring Sales</MenuItem>
            <MenuItem>Gardening and Lawn Management</MenuItem>
            <MenuItem>Indusrial Flooring</MenuItem>
            <MenuItem>Interior Design</MenuItem>
            <MenuItem>Painting Works</MenuItem>
            <MenuItem>Plumbing Works</MenuItem>
            <MenuItem>Road and Public Area Cleaning</MenuItem>
            <MenuItem>Wondow Blind Sales</MenuItem>
          </Menu>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <VedEntDrawer/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
    </nav>
  );
};

export default VedEntAppBar;
