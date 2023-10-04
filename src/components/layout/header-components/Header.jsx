import React from "react";
import { Box, Typography } from "@mui/material";
// import classes from "./Header.module.css";
import Cart from "./Cart";


const Header = () => {

  return (
    <Box display="flex"  height="9rem" backgroundColor="black"  >

      <Box display='flex' width='75%' height='10rem' >
        <Typography variant="h1" sx={{ padding:'20px', color:'white'}}>Cafe'01</Typography>
      </Box>

      <Cart />

    </Box>
  );
};

export default Header;
