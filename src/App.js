import { useState } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Productpage from './page/Productpage';
import ProductDetailpage from './page/ProductDetailpage';
import Loginpage from './page/Loginpage';
import Userpage from './page/Userpage';

function App() {
  const [authenticate, setAuthenticate] = useState(true)
  const PrivateRoute = () => {
    return authenticate == true ? <Userpage /> : <Navigate to="/login" />
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/products" element={<Productpage />}></Route>
        <Route path="/products/:id" element={<ProductDetailpage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/user" element={<PrivateRoute />}></Route>
      </Routes>
    </div >
  );
}

export default App;
