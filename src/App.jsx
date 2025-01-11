import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
