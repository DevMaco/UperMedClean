import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard";
import Signinvd from "./Pages/Signinvd"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedecinForm from "./Components/MedecinForm";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
            <Route path="/Signin" element={<Signin />} />
                <Route path="/Home" element={<HomePage />} />
                  <Route path="/vd" element={<Signinvd />} />
                  <Route path="/dsh" element={<MedecinForm />} />
                   
      </Routes>
    </Router>
  );
}
export default App;
