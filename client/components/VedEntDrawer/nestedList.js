import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const servicesList = ['Interior Design','Civil Works','Electrical Works','Plumbing Works','Carpentry Works','Fabrication Works','Painting Works','Commercial Cleaning','Corporate Technical','All Types of Flooring Sales','Industrial Flooring','Road and Public Area Cleaning','Gardening and Lawn Management',"Window's Blinds Sales"];
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Vedant Enterprises
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Services" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {servicesList.map((text) => (
          <ListItem button className={classes.nested} key={text}>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Gallery" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Our Clients" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact Us" />
      </ListItem>
      <ListItem>
      <iframe width="200" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Solitaire%20Business%20Hub%20Wakad%20Pune+(Vedant%20Enterprises)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9deaead82f1f081352678c18ade0e81b0c9da6a2'></script>
      </ListItem>
    </List>
  );
}