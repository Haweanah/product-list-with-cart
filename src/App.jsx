import { useState } from "react"
import Header from "./components/Header"
import Entries from "./components/Entries"
import data from "../data.json"
import Cart from "./components/Cart"
import './App.css'

function App() {
  

const [CartNo, setCartNo] = useState(0);
const [add, setAdd] = useState(0);
const [substract, setSubstract] = useState(0);
const [quantities, setQuantities] = useState({});



function addProduct() {
  setCartNo(prev => prev + 1);
}

function removeProduct() {
  setCartNo(prev => prev > 0 ? prev - 1 : 0);
}

function resetCart() {
  setCartNo(0);
}

function increase(id) {
  setQuantities(prev => ({
    ...prev,
    [id]: (prev[id] || 0) + 1
  }));
}

function decrease(id) {
  setQuantities(prev => ({
    ...prev,
    [id]: Math.max((prev[id] || 0) - 1, 0)
  }));
}






  const Entry = data.map((entry, index) => (
    <Entries
    key={index}
    {... entry}
    CartNo={CartNo}
  addProduct={addProduct}
  removeProduct={removeProduct}
  resetCart={resetCart}
  quantity={quantities[entry.id] || 0}
    increase={increase}
    decrease={decrease}
    />
  ))
  return (
    <div className="page">
    <Header/>
  <main>
  
   <div className="products">
     
  {Entry}
   </div>
  <Cart
  CartNo={CartNo}
  addProduct={addProduct}
  removeProduct={removeProduct}
  resetCart={resetCart}
  />
  </main>
    </div>
  )
}

export default App
