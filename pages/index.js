import React, { useState } from 'react'
import Header from '../scr/Header/Header'
import Main from '../scr/Main/Main'
import Footer from '../scr/Footer/Footer'
import Cart from '../scr/Cart/Cart'


function Home() {

  const [cart, setCart] = useState([])

  function handleAddItensToCart(name, nutritions, price) {
    const item = {name, nutritions, price}
  }
  function handleRemoveItensToCart(item) {
    console.log("removed: "+item);
  }

  return (
   
      <>
    
      <Header/>
      <Main addItem={handleAddItensToCart} removeItem={handleRemoveItensToCart}/> 
      <Cart cart ={cart} />
      <Footer/>
      
      </>
  )
}

export default Home