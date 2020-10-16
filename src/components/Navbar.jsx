import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
function Navbar() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#272C34" }}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Click here</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
