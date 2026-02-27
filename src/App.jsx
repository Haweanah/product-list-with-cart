import { useState } from "react"
import Header from "./components/Header"
import Entries from "./components/Entries"
import data from "../data.json"
import Cart from "./components/Cart"
import OrderConfirmed from "./components/OrderConfirmed"
import './App.css'

function App() {
  

const [CartNo, setCartNo] = useState(0);
const [quantities, setQuantities] = useState({});
const [orderConfirmed, setOrderConfirmed] = useState(false)



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
    !orderConfirmed ? ( <div>
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
          src="/images/icon-remove-item.svg"
          alt="remove item"
          onClick={() => decrease(item.id)}
        />
      </div>
      
    </div>
    <hr 
    className={orderConfirmed ? "hr-confirmed" : ""}
    />
    
    </div>
    ) : ( 

    
    <div>
      <div key={item.id} className="ordered-items-wrapper">
      <div className="ordered-items">
       <div className="ordered-item-left">
         <div className="order-image-wrapper"><img 
        className={orderConfirmed ? "img-confirmed" : "img-not-confirmed"}
        src={item.image.mobile} alt="" />
        </div>
        <div className="ordered-items-details-confirmed">
          <span className="ordered-item-name">{item.name}</span>
        <span className="count-details">
          <span className="item-no">{quantities[item.id]}x</span>
          <span>@ ${item.price.toFixed(2)}</span>
        </span>
        
        </div>
       </div>
        <div> <span className="item-total-price">
            ${(quantities[item.id] * item.price).toFixed(2)}
          </span></div>
        
        
      </div>

      
      
    </div>
    <hr 
    className={orderConfirmed ? "hr-confirmed" : ""}
    />
    
    </div>
    )
   

    



  ))
 let total = 0

for (let i = 0; i < data.length; i++) {
  const item = data[i]
  const quantity = quantities[item.id] || 0

  total += item.price * quantity
}


function handleOrderConfirmation() {
  setOrderConfirmed(true)
}


return orderConfirmed ? (
<div>
   <div className="page-on-confirmation">
    <Header/>
    <main>
      <div className="products">
        {Entry}
      </div>

      <Cart
        CartNo={CartNo}
        cartItem={cartItem}
        total={total}
        handleOrderConfirmation={handleOrderConfirmation}
      />
    </main>
  </div>
  <div className="confirmed-page-overlayed"><OrderConfirmed 
    cartItem={cartItem}
    total={total}
  /></div>
</div>
  
  
) : (
  <div className="page">
    <Header/>
    <main>
      <div className="products">
        {Entry}
      </div>

      <Cart
        CartNo={CartNo}
        cartItem={cartItem}
        total={total}
        handleOrderConfirmation={handleOrderConfirmation}
      />
    </main>
  </div>
)
}

export default App
