import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Public_Layout from './components/Layout/Public_Layout/Public_Layout';
import Home from "./pages/public_pages/Home/Home.jsx";
import About from "./pages/public_pages/About/About.jsx";
import Services from "./pages/public_pages/Services/Service.jsx";
import Portfolio from './pages/public_pages/Portfolio/Portfolio.jsx';
import Contact from "./pages/public_pages/Contact/Contact.jsx";
import Login from "./pages/public_pages/Login/Login.jsx";
import Dashboard_layout from './components/Layout/Dashoard_Layout/Dashboard_layout.jsx';
import Dashboard from "./pages/admin_page/Dasboard/Dashboard.jsx"
import ProtectedRoute from './routes/ProtectedRoutes.jsx';
function App() {
  return (
    <Routes>
      <Route element={<Public_Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/admin" element={<Dashboard_layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App
