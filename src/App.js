import React from "react";
import Header from "./components/layout/header-components/Header";
import Meals from "./components/layout/meal-components/Meals";
import { GlobalProvider } from "./store/cart-context/CartStateProvider";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Meals />
    </GlobalProvider>
  );
}

export default App;
