import React from 'react'

const CardItem = () => {
    return (
        <div className='card'>
            <img src='/img/apple.svg' />
            <h1 className='productName'>Produto</h1>
            <h3 className='productPrice'>R$ 10,00 Kg</h3>
            <div>

                <div className='buttons'>
                    <button>
                        <img src='/img/shop.svg' />
                    </button>
                    <button>
                        <img src='/img/info.svg' />
                    </button>
                    <button>
                        <img src='/img/remove.svg' />
                    </button>
                </div>
            </div>
            {/* <h3>Descrição</h3> */}
        </div>
    )
}

export default CardItem