import React from "react";
import "reactjs-popup/dist/index.css";
import classes from "./Modal.module.css";
import { Box, Typography, Button } from "@mui/material";
import { CartStateProvider } from "../../store/cart-context/CartStateProvider";
import ModalCard from "../layout/modal-component/ModalCard";




const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};



const ModelOverlay = ({ onClick, item, total,  }) => {
  const hasItems = item.length > 0

  return (
    <div className={classes.modal}>
      <Box >
        <Typography variant="h5">ORDER DETAILS</Typography>
        <Button onClick={onClick}>Close</Button>

        {item.map((item, index) => {
          return (
            <>
              <ModalCard 
                key={index}
                title={item.name}
                price={item.price}
                image={item.image}
                count={item.itemCount}
              />
            </>
          );
        })}
        <Typography variant="h5"> Total Amount : {total.toFixed(2)} </Typography>

        {hasItems && <Button>PLACE ORDER</Button>}

      </Box>
    </div>
  );
};



const Modal = () => {
  const { displayFormFunc, items, totalAmount } = React.useContext(CartStateProvider);

  return (
    <>
      <BackDrop onClick={displayFormFunc} />
      <ModelOverlay onClick={displayFormFunc} item={items} total={totalAmount} />
    </>
  );
};

export default Modal;
