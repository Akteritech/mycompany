import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from './components/fronted/auth/Login';
import Register from './components/fronted/auth/Register';
import Home from "./components/fronted/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
