import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography>logo + menu items</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
