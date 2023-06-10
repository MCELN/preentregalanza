import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemListContainer/ItemDetailContainer';

const ProductsDetail = () => {
    const [productData, setProductData] = useState({});

    const {productId} = useParams();

    useEffect(() => {
        fetch(`/product.json`)
        .then(res => res.json())
        .then(data => {
            const product = data.find(item => item.id === productId);
            setProductData(product);
        });
    },[productId]);

    return (
        <ItemDetailContainer productData={productData} />
    )
}

export default ProductsDetail
