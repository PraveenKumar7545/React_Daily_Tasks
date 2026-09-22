import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Day1 from "./days/Day-01-JSX-Components/Day1";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/day1" element={<Day1 />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;