import { useState } from "react"
import Header from "./components/Header"
import Entries from "./components/Entries"
import data from "../data.json"
import Cart from "./components/Cart"
import './App.css'

function App() {
  

const [CartNo, setCartNo] = useState("0")

  const Entry = data.map((entry, index) => (
    <Entries
    key={index}
    {... entry}
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
  />
  </main>
    </div>
  )
}

export default App
