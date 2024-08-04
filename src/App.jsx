import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import AboutPage from "./components/AboutPage";
import AboutG from "./components/AboutG";
import AboutU from "./components/AboutU";
import AboutD from "./components/AboutD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutG" element={<AboutG />} />
        <Route path="/aboutU" element={<AboutU />} />
        <Route path="/aboutD" element={<AboutD />} />
      </Routes>
    </Router>
  );
}

export default App;
