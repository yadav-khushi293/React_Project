import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./Pages/Navbar/navbar";
import { HomePage } from "./Pages/HomePage/homePage";
import { Men } from "./Pages/Men/men";
import { Footware } from "./Pages/Men/Men_Footware/footware";
import { Topware } from "./Pages/Men/Men_Topware/topware";
import { ProdectPages } from "./ProductPage/ProductPages";
import { Women_Footware } from "./Pages/Women_Footware/women_footware";
import { Accessories } from "./ProductPage/Accessories";
import { Ozark } from "./Pages/Ozark/ozark";
import { Cart } from "./Pages/HomePage/Cart";
import { Footer } from "./ProductPage/Footer";
import { Sign_in } from "./Pages/Sign_in/Sign_in";
import { Login } from "./Pages/Login/Login";
import { Search } from "./Pages/HomePage/Search";
import { Page } from "./Pages/Detail_Page/Detail_Page";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/men_footware" element={<Footware />}></Route>
        <Route path="/men_topware" element={<Topware />}></Route>
        <Route path="/products" element={<ProdectPages />}></Route>
        <Route path="/women_topware" element={<Women_Footware />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
        <Route path="/ozark" element={<Ozark />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign_in" element={<Sign_in />}></Route>
        <Route path="/page" element={<Page />}></Route>
      </Routes>

      {/* <Footer /> */}

      {/* <Sign_in/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
