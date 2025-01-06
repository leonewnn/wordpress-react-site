import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./pages/Description";
import Sketch from "./pages/Sketch";
import Mockup from "./pages/Mockup";
import Flow from "./pages/Flow";
import Logbook from "./pages/Logbook"; // Add this import

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/sketch" element={<Sketch />} />
          <Route path="/mockup" element={<Mockup />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/logbook" element={<Logbook />} />{" "}
          {/* Update this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
