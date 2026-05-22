import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Public_Layout from './components/Layout/Public_Layout/Public_Layout';
import Home from "./pages/public_pages/Home/Home.jsx";
import About from "./pages/public_pages/About/About.jsx";
import Services from "./pages/public_pages/Services/Service.jsx";
import Portfolio from './pages/public_pages/Portfolio/Portfolio.jsx';
function App() {
  return (
    <Routes>
      <Route element = {<Public_Layout/>}>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/service' element = {<Services/>}/>
          <Route path='/portfolio' element = {<Portfolio/>}/>
      </Route>
    </Routes>
  )
}

export default App
