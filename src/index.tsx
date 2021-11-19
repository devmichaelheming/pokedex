import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from "../src/styles/GlobalStyles";
import App from './views/App'
import Home from './views/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
