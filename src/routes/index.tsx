import React from "react";
import {Routes, Route} from "react-router-dom";
import {Details} from "views/Details";
import {Home} from "views/Home";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<Details />} />
    </Routes>
  );
}
