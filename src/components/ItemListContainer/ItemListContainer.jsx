import React from 'react'
import style from './itemListContainer.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ItemListContainer = ({productsData}) => {

    console.log(productsData);
    return (
        <div className={style.conteiner}>
            {productsData.map(product => {
                return (
                    <div className={style.item}>
                        <ProductCard key={product.id} productsData={product} />
                    </div>
                )
            })}
        </div>
    );
}

export default ItemListContainer
