import React from "react";

import { Typography, AppBar, Toolbar } from "@material-ui/core/";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Lista de Pull Requests</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
