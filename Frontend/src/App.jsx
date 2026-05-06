import React from "react";

// import {Accessories} from "./ProductPage/Accessories"
// import { Route, Routes } from "react-router-dom";

// import "./App.css";
// import { Navbar } from "./Pages/Navbar/navbar";
// import { HomePage } from "./Pages/HomePage/homePage";
// import { Men } from "./Pages/Men/men";
// import { Footware } from "./Pages/Men/Men_Footware/footware";
// import { Topware } from "./Pages/Men/Men_Topware/topware";
// import { ProdectPages } from "./ProductPage/ProductPages";
// import { Women_Footware } from "./Pages/Women_Footware/women_footware";
// import { Accessories } from "./ProductPage/Accessories";
// import { Ozark } from "./Pages/Ozark/ozark";
// import { Footer } from "./ProductPage/Footer";
import {Cart} from "./Pages/Cartpage/Cart";
// import {Sign_in} from "./Pages/Sign_in/Sign_in";
// import {Login} from "./Pages/Login/Login"

function App() {
  return (
    <>
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/men_footware" element={<Footware />}></Route>
        <Route path="/men_topware" element={<Topware />}></Route>
        <Route path="/products" element={<ProdectPages />}></Route>
        <Route path="/women_topware" element={<Women_Footware />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
        <Route path="/ozark" element={<Ozark />}></Route>
      </Routes> */}

      {/* <Footer /> */}

      <Cart/>
      {/* <Sign_in/> */}
      {/* <Login/> */}
      {/* <Accessories/> */}
    </>
  );
}

export default App;
