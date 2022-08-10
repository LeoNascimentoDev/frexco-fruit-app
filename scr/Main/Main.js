import React from 'react'
import Card from '../CardItem/CardItem'
import { products } from '../../database/index'
import SectionInfo from './SectionInfo'

const Main = ({ addItem, removeItem }) => {

    let nutriInfo =''

    return (
        <main>

            <SectionInfo />

            <section className='cardsSection'>

                {products.map(function (product, index) {

                    return (

                        nutriInfo = ['Calorias: '+product.nutritions.calories+' Kcal ',
                        'Carboidratos: '+product.nutritions.carbohydrates+' g ',
                        'Gordura: '+product.nutritions.fat+' g ',
                        'Proteína: '+product.nutritions.protein+' g ',
                        'Açúcar: '+product.nutritions.sugar+' g '],


                        < Card name={product.name}
                            nutritions={nutriInfo}
                            price={product.price}
                            addItem={addItem}
                            removeItem={removeItem}
                            key={index}
                        />
                    )
                }

                )}

            </section>

        </main>
    )
}

export default Main