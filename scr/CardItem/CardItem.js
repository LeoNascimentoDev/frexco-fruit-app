import React from 'react'

const CardItem = () => {
    return (
        <div className='card'>
            <img src='/apple.svg' />
            <h1>Nome Produto</h1>
            <div>
                <button>Add</button>
                <button>Remove</button>
                <button>Info</button>
            </div>
            <h3>Descrição</h3>
        </div>
    )
}

    export default CardItem