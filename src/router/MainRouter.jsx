import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Item from '../pages/Item';
import Category from '../pages/Category';

const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='*' element={<Home />} />
                <Route exact path='/' element={<Home />} />
                <Route path='/products/:productId' element={<Item />} />
                <Route path='/category/:categoryId' element={<Category />} />
            </Routes>
        </Router>
    );
};

export default MainRouter
