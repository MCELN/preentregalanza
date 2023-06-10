import React, {useEffect, useState} from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

const Category = () => {
    const [productData, setProductData] = useState([]);

    const {categoryId} = useParams(); 

    useEffect(() => {
        fetch('/product.json')
        .then(res => res.json())
        .then(data => {
            let  products = [];
            if(categoryId === 'male' || categoryId === 'female') {
                products = data.filter(product => product.category === categoryId || product.category === 'unisex');
            } else {
                products = data.filter(product => product.category === categoryId);
            }
            setProductData(products);
        })
    }, [categoryId]);

    return (
            <ItemListContainer productsData={productData} />
    )
}

export default Category
