import "./App.css";
import { Navbar } from "./Pages/Navbar/navbar";
import { HomePage } from "./Pages/HomePage/homePage";
// import { ProdectPages } from "./ProductPage/ProductPages";
import { Men } from "./Pages/Men/men";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      {/* <ProdectPages /> */}
      <Men />
    </>
  );
}

export default App;
