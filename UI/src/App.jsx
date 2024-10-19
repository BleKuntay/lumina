import './App.css';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./pages/Products.jsx";
import PreOrder from "./pages/PreOrder.jsx";
import Testimonials from "./pages/Testimonials.jsx";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/preorder" element={<PreOrder />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
