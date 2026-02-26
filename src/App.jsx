import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import Quote from "./pages/Quote"
import Joke from "./pages/Joke"
import Country from "./pages/Country";
import Planner from "./pages/Planner";


import './index.css'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/country" element={<Country/>} />
        <Route path="/planner" element={<Planner/>} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;