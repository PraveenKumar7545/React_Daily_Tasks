import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Day1 from "./days/Day-01-JSX-Components/Day1";
import Day2 from "./days/Day-02-Props-Lists/Day2";
import Day3 from "./days/Day-03-State-Events/Day3";
import Day4 from "./days/Day-04-Forms/Day4";
import Day5 from "./days/Day-05-API-useEffect/Day5";
import Day6 from "./days/Day-06-Routing-LocalStorage/Day6";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6/*" element={<Day6 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;