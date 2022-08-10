import React from 'react'
import Card from '../CardItem/CardItem'

const Cart = ({cart}) => {
    return (
       
            <section className='cardsSection'>

            <h2> Carrinho de Compras:</h2>

            {cart.map((item,index) => <item key={index}/>)}

            </section>

    )
}

export default Cart