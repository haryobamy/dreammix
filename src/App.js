import React from "react";
import { Feature, Footer, Hero, Products } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyle";
import { ProductData, ProductDataTwo } from "./components/products/data";
import { CartProvider } from "react-use-cart";
function App() {
  // const [cartItems, setCartItems] = React.useState([]);
  // const [cart, setCart] = React.useState([]);
  // console.log(cart);

  // console.table(cartItems);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  // const CartTotal = cartItems.reduce(
  //   (total, { price = 0 }) => total + price,
  //   0
  // );
  // const CartQty = cartItems.length;
  // console.log(CartQty);

  return (
    <Router>
      <GlobalStyles />
      <CartProvider>
        <Hero />
        <Products data={ProductData} />
        <Feature />
        <Products data={ProductDataTwo} />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
