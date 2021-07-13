import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 90,
    background: theme.palette.secondary.dark,
  },
  title: {
    flexGrow: 1,
    fontSize: "2em",
    fontWeight: 600,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25em",
    },
  },
  menuButton: {
    margin: theme.spacing(1),
  },
}));

const VedEntAppBar = () => {
  const classes = useStyles();

  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* <Image src="/Icons/Logo.svg" width={48} height={48} alt="Logo" /> */}
          <div className={classes.title}>Vedant Enterprises</div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
    </nav>
  );
};

export default VedEntAppBar;
