import "./App.css";
import NavBar from './components/NavBar';
import Title from "./components/Header";
import { useState } from 'react';
import Products from "./components/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (prod) => {
    const exist = cartItems.find(x => x.id === prod.id);
    console.log(cartItems)
    if(exist) {
      setCartItems(cartItems.map((x) => 
      x.id === prod.id ? {...exist, qty: exist.qty + 1 } : x )
      );
      console.log(cartItems)
    } else {
      setCartItems([...cartItems, {...Products, qty: 1}])
      console.log(cartItems)
    }
  }
  return (
    <div className="App">
      <Title/>
      <NavBar onAdd={onAdd} cartItems={cartItems}/>

    </div>
  );
}

export default App;
