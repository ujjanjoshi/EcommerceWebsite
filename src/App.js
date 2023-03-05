import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Product } from './pages/product/product';
function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar/>
        <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/product" element={<Product/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;