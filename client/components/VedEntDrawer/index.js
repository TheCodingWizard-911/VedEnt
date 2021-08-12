import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

import DrawerItemsList from "./items";

const useStyles = makeStyles((theme) => ({}));

const VedEntDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const classes = useStyles();

  const drawerClose = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <Drawer anchor="right" open={drawerOpen} onClose={drawerClose}>
        <DrawerItemsList />
      </Drawer>
    </div>
  );
};

export default VedEntDrawer;
