import Login from "./components/Login";
import Signin from "./components/Signin";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
            <Route path="/Signin" element={<Signin />} />
                <Route path="/Home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
