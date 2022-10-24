import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography>Header implemention goes here...</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
