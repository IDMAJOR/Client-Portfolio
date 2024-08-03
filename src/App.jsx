import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Body} />
      </Routes>
    </Router>
  );
}

export default App;
