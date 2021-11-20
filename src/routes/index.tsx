import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home'

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/pokemon/:name" element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    )
}