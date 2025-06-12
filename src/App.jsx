import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import MotorsDetail from "./components/motors/MotorsDetail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="//car/:id" element={<MotorsDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
