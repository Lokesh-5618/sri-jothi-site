import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Customization from './pages/Customization';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="customization" element={<Customization />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
