import React from 'react'

const CardItem = ({ name, nutritions, price, addItem, removeItem}) => {
    
    
    return (
        <div className='card'>
            <img src='/img/apple.svg' alt='Image-Item' />
            <h1 className='productName'>{name}</h1>
            <h3 className='productPrice'>R${price}</h3>

            <div>
                <div className='buttons'>
                    <button onClick={() => addItem(name, nutritions, price)}>
                        <img src='/img/shop.svg' />
                    </button>
                    <button className='btInfo'>

                        <img src='/img/info.svg' />
                    </button>
                    <button className='btRemove' onClick={() => removeItem(name)}>
                        <img src='/img/remove.svg' />
                    </button>
                </div>
            </div>

            <div id='productNutritions'  >
                <h2>
                    {nutritions}
                </h2>
            </div>
        </div>
    )
}

export default CardItem