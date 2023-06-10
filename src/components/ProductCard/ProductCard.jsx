import React from "react";
import { Link } from 'react-router-dom';
import style from './productCard.module.css';

const ProductCard = ( {productsData} ) => {

    const {id, brand, product, image, price} = productsData;
    return (
        <div className={style.container}>                
            <Link to={`/products/${id}`}>
                <div key={id} className={style.boxProduc}>           
                    <h3>{brand}</h3>
                    <img src={`.${image}`} alt={product} />
                    <p>{product}</p>
                    <p className={style.buy}>{price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
