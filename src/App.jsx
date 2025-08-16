import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Chefs from "./pages/Chefs.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Payment from "./pages/Payment.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
     <Route path="/services" element={<Services />} />
     <Route path="/chefs" element={<Chefs />}/>
     <Route path="/menu" element={<Menu />} />
     <Route path="/contact" element={<Contact />}/>
     <Route path="/payment" element={<Payment />}/>
    </Routes>
  );
}

export default App;
