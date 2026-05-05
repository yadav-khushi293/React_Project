import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./Pages/Navbar/navbar";
import { HomePage } from "./Pages/HomePage/homePage";
import { ProdectPages } from "./ProductPage/ProductPages";
import { Men } from "./Pages/Men/men";
import { Ozark } from "./Pages/Ozark/ozark";
import { Accessories } from "./ProductPage/Accessories";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/ozark" element={<Ozark />}></Route>
        <Route path="/products" element={<ProdectPages />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
      </Routes>
    </>
  );
}

export default App;
