import React from 'react'

const CardItem = () => {
    return (
        <div className='card'>
            <img src='/img/apple.svg' />
            <h1>Nome Produto</h1>
            <div>

                <div className='buttons'>
                    <button>
                        <img src='/img/shop.svg' />
                    </button>
                    <button>
                        <img src='/img/remove.svg' />
                    </button>
                    <button>
                        <img src='/img/info.svg' />
                    </button>
                </div>
            </div>
            <h3>Descrição</h3>
        </div>
    )
}

export default CardItem