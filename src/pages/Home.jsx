import React, {useState, useEffect} from 'react';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';



const Home = () => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetch('/product.json')
        .then(res => res.json())
        .then(data => setProductsData(data))
        .catch((err) => console.log(err));
    },[]);

    return (       
            <ItemListContainer  productsData={productsData}/>
    )
}

export default Home
