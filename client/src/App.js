import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import NewPost from './pages/Newpost.jsx'; // Import NewPost component
import './App.css';
import { AuthProvider } from './context/authcontext.jsx';

const App = () => {
  return (
    <AuthProvider>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-post" element={<NewPost />} /> {/* Add route for NewPost */}
      </Routes>
    </Router>

    </AuthProvider>
   
  );
};

export default App;
