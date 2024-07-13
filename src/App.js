import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Route, Routes } from 'react-router-dom';
import Productpage from './page/Productpage';
import ProductDetailpage from './page/ProductDetailpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/products" element={<Productpage />}></Route>
        <Route path="/products/:id" element={<ProductDetailpage />}></Route>
      </Routes>
    </div >
  );
}

export default App;
