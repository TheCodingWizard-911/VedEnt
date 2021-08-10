import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  menuButton: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const VedEntAppBar = () => {
  const classes = useStyles();

  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>Ved Ent</div>
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
