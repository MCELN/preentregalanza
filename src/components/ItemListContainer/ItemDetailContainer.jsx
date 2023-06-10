import React from 'react'
import style from "./itemDetailContainer.module.css"

const ItemDetailContainer = ({productData}) => {
    return (
        <div key={productData.id}>
            <h3 className={style.title}>{productData.brand}</h3>
            <div className={style.container}>
                <div>
                    <img className={style.imageParfum} src={`.${productData.image}`} alt={productData.product} />
                </div>
                <div>
                    <p className={style.subTitle}>{productData.product}</p>
                    <p className={style.description}>{productData.description}</p>
                    <p className={style.price}>{`Precio: $ ${productData.price}`}</p>
                    <button className={style.btnAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
