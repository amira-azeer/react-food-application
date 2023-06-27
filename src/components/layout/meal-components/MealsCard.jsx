import React, { useContext } from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Button, Chip, ButtonGroup, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartStateProvider } from "../../../store/cart-context/CartStateProvider";



const MealsCard = ({ id, title, price, src }) => {
  const [ count, setCount ] = React.useState(0);
  const { addToCart, removeFromCart, } = useContext(CartStateProvider);


  function addToCartClick() {
    const order = {
      id: id,
      name: title,
      price: price,
      image: src,
      itemCount : count+1,
    };
    setCount(count + 1);
    addToCart(order);
  }


  return (
    <Card sx={{ maxWidth: 550 }}>
      <CardMedia sx={{ height: 180 }} image={src} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Price : {price}
        </Typography>
      </CardContent>

      <CardActions>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              removeFromCart(id);
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>

          <Button aria-label="increase" onClick={ () => addToCartClick()}>
            <AddIcon fontSize="small" />
          </Button>

          <Chip sx={{ ml: "20px" }} color="success" label={count}></Chip>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default MealsCard;
