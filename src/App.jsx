import { useState } from "react"
import Header from "./components/Header"
import Entries from "./components/Entries"
import data from "../data.json"
import Cart from "./components/Cart"
import './App.css'

function App() {
  

const [CartNo, setCartNo] = useState(0);
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
  setCartNo(prev => prev + 1);
}

function decrease(id) {
  setQuantities(prev => ({
    ...prev,
    [id]: Math.max((prev[id] || 0) - 1, 0)
  }));

  setCartNo(prev => prev > 0 ? prev - 1 : 0);
}


  const Entry = data.map((entry) => (
    <Entries
    key={entry.id}
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




const cartItem = data
  .filter(item => quantities[item.id] > 0)
  .map(item => (

    <div>
      <div key={item.id} className="cart-wrapper">
      <div className="cart-item">
        <p className="item-name">{item.name}</p>
        <p className="count-details">
          <span className="item-no">{quantities[item.id]}x</span>
          <span>@ ${item.price.toFixed(2)}</span>
          <span>
            ${(quantities[item.id] * item.price).toFixed(2)}
          </span>
        </p>
      </div>

      <div className="remove-item">
        <img
          src="/public/assets/images/images/icon-remove-item.svg"
          alt="remove item"
          onClick={() => decrease(item.id)}
        />
      </div>
      
    </div>
    <hr />
    
    </div>
    

    



  ))
 let total = 0

for (let i = 0; i < data.length; i++) {
  const item = data[i]
  const quantity = quantities[item.id] || 0

  total += item.price * quantity
}

total.toFixed(2)
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
  cartItem={cartItem}
  total={total}
  />
  </main>
    </div>
  )
}

export default App
