import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact />
      </Routes>
    </Router>
  );
}

export default App;
