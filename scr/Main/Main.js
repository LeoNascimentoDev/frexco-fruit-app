import React from 'react'
import Card from '../CardItem/CardItem'

const Main = () => {
    return (
        <main>
            <section className='info'>
                <div>
                    <img src='/apple.svg'/>
                    <h2>
                        PRODUTOS FRESCOS
                    </h2>
                    <h4>
                        ESTOQUE NOVO TODOS OS DIAS
                    </h4>
                </div>
                <div>
                    <img src='/car.svg'/>
                    <h2>
                        FRETE GRÁTIS
                    </h2>
                    <h4>
                        COMPRAS ACIMA DE R$50,00
                    </h4>
                </div>
                <div>
                    <img src='/new.svg'/>
                    <h2>
                        NOVIDADE
                    </h2>
                    <h4>
                        NOVOS PRODUTOS
                    </h4>
                </div>
                <div>
                    <img src='/safety.svg'/>
                    <h2>
                       COMPRA SEGURA
                    </h2>
                    <h4>
                        SEU DINHEIRO 100% SEGURO
                    </h4>
                </div>
                
     
            </section>

            <section className='cardsSection'>

                <Card />
                <Card />
                <Card />

            </section>

        </main>
    )
}

export default Main