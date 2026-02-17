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
    <>
  <main>
    <Header/>
  {Entry}
  <Cart
  CartNo={CartNo}
  />
  </main>
    </>
  )
}

export default App
