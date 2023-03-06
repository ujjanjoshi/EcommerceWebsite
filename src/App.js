import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Product } from './pages/product/product';
import { ShopContextProvider } from './context/shop-context';
import { Signup } from './pages/signup/signup';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
