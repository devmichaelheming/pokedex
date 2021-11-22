import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Details from '../views/Details';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}