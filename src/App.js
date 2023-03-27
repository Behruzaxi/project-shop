import React, { useState } from "react";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";



function App() {
  const [show, setShow] = useState(false)
  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    setCart([...cart, item]);
  }
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {
        show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />
      }

    </React.Fragment>
  );
}

export default App;
