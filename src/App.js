import React from 'react';
import HomeUI from './containers/HomeUI';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Inventory/Navbar';
import InventoryUI from './components/Inventory/InventoryUI';

import About from './components/Inventory/Pages/About';
// import HomeProduct from './components/Inventory/Pages/HomeProduct';
import Buyers from './components/Inventory/Pages/Buyers';
import InventoryProduct from './components/Inventory/Pages/InventoryProduct';
import ContactUs from './components/Inventory/Pages/ContactUs';
import Suppliers from './components/Inventory/Pages/Suppliers';
import User from './components/Inventory/Pages/User';
import Products from './components/Inventory/Pages/Products';
import Order from './components/Inventory/Pages/Order';




function App() {
  return (
    <div >
      <BrowserRouter>
        
        <Routes>
        <Route path="/" exact element={<HomeUI/>} />
          <Route exact path="/inventory" element={<InventoryUI/>} />
          {/* <Route path='/inventory/home-product' element={<HomeProduct/>} /> */}
          <Route path='/inventory/products' element={<Products/>} />
          <Route path='/inventory/order' element={<Order/>} />
          <Route path='/inventory/about' element={<About/>} />
          <Route path='/inventory/contact-us' element={<ContactUs/>} />
          <Route path='/inventory/suppliers' element={<Suppliers/>} />
          <Route path='/inventory/buyers' element={<Buyers/>} />
          <Route path='/inventory/inventory-product' element={<InventoryProduct/>} />
          <Route path='/inventory/user' element={<User/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

