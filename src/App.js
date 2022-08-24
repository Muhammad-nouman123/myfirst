import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {

  const[cartShow,setCartshow] = useState(false);

  const cartShowHandler = () => {
setCartshow(true);
  }
  const cartCloseHandler = () => {
    setCartshow(false);
      }

  return (
    <CartProvider>
    {cartShow && <Cart onCartClose={cartCloseHandler} />}
      <Header onCartShow={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
