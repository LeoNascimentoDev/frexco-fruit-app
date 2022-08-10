import React from 'react'

const Header = () => {
    return (

        <header>

            <div className='cover'>
                <img src='/img/hortifruti-logo.png'></img>
            </div>

            <div className='search'>
                <input type="text" id="txtSearch" placeholder="Buscar..." />
                <a href='#'>
                    <img src="/img/search.svg" alt="Buscar..." id="btnBusca" width={"30px"} />
                </a>

            </div>

            <nav>
                <a href='#'>
                    <img src="/img/login.svg" alt="login" id="btnLogin" width={"30px"} />
                    <p>
                        Minha Conta
                    </p>
                </a>
            </nav>

            <div >
                <a href="#" className='resume'>
                    <img src='/img/shop-car.svg' width={"50px"} />
                    <div id='amount'> Nº de Itens: </div>
                    <div id='value'> Valor Total R$: </div>
                </a>
            </div>
            <a className='dropDown' href='#'>
                <img src="/img/menu.svg" alt="Menu" id="btnDropDown" />
            </a>

        </header>

    )
}

export default Header