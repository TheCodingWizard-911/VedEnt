import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "80vw",
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
}));

const DrawerItemsList = () => {
  const classes = useStyles();

  const [nestedOpen, setNestedOpen] = React.useState(false);
  const handleClick = () => {
    setNestedOpen(!nestedOpen);
  };

  return (
    <List component="div" className={classes.list}>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Services" />
        {nestedOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Carpentry Works" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Civil Works" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Commercial Cleaning" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Corporate Technical" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Electrical Works" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Fabrication Works" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Flooring Sales" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Gardening and Lawn Management" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Indusrial Flooring" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Interior Design" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Painting Works" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Plumbing Works" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Road and Public Area Cleaning" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Window Blind Sales" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Gallery" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );
};

export default DrawerItemsList;
