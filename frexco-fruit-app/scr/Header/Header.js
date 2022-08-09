import React from 'react'

const Header = () => {
    return (

        <header>

            <div className='cover'>
                <img src='/frexco-logo.png'></img>
            </div>

            <div className='search'>
                <input type="text" id="txtSearch" placeholder="Buscar..." />
                    <a href='#'>
                <img src="/search.svg" alt="Buscar..." id="btnBusca" width={"30px"}/>
                    </a>
            </div>

            <nav>
                <button>
                    Minha Conta
                </button>
                <button>
                    Meu Carrinho
                </button>
            </nav>

            <div className='resume'>
                <img src='/shop-car.svg' width={"50px"}/>
                <div id='amount'> Nº de Itens: </div>
                <div id='value'> Valor Total R$: </div>
            </div>

        </header>

    )
}

export default Header