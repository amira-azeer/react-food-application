import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Box, Chip, Typography } from "@mui/material";
import { CartStateProvider } from "../../../store/cart-context/CartStateProvider";
import Modal from "../../ui-components/Modal";

const Cart = () => {
  const { displayFormFunc, displayForm, cartItemCount } = React.useContext(CartStateProvider);

  return (
    <Box sx={{ display:"flex", justifyContent:"center", backgroundColor:"grey", height:"3rem",  width:"25%", borderRadius:"15px", m:"2%"}}>
      <Button onClick={displayFormFunc}>
        <ShoppingCartIcon sx={{ color: "white" }} />
        <Typography variant="button" color="white" m="1rem">
          your cart
        </Typography>
        <Chip color="primary" label={cartItemCount}></Chip>
      </Button>
      {displayForm ? <Modal /> : null}
    </Box>
  );
};

export default Cart;
