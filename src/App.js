import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Product from "./components/Product";
import Cart from './components/Cart';
import { Icon } from '@iconify/react';
import { createContext, useState } from "react";
import NotFound from "./NotFound";


export const GlobalInfo = createContext();

function App() {
  const [getProduct, setProduct] = useState([]);
  const location = useLocation();
  const chekPath = location.pathname.split('/')[1];

  return (
    <GlobalInfo.Provider value={{ getProduct, setProduct }}>
      <div className=" mx-auto flex flex-col min-h-screen relative">
        <header className="bg-black text-white ">
          <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg pt-2 mb-4 text-center">Welcome to Our Optical Store</h1>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Frame" element={<Product featured='Frames' type={0} />} />
            <Route path="/Lens" element={<Product featured='Lenses' type={1} />} />
            <Route path="/Case" element={<Product featured='Cases' type={2} />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/detail/:category/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-black text-white text-center ">
          <p>&copy; 2023 Optical Store</p>
        </footer>
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
          {
            (chekPath === "") ? <button className="text-2xl border-2 border-blue-600 flex items-center justify-center   p-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white">
              <Link to="/Cart">
                <Icon icon="mdi:cart" />
              </Link>
            </button> : ""

          }
          {
            (chekPath === "Cart") ? <button className="text-2xl border-2 border-blue-600 p-2 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-700 text-white">
              <Link to="/">
                <Icon icon="clarity:home-solid" />
              </Link>
            </button> : ""

          }
        </div>
      </div>
    </GlobalInfo.Provider>
  );
}


export default App;
