import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "../../Commen/Navbar/Navbar.jsx";
import Footer from "../../Commen/Footer/Footer.jsx";
import style from "./Public_layout.module.css";

function Public_Layout() {
  return (
    <div className='style.layout'>
            <Navbar/>

        <main className='style.main'>
          <Outlet/>
        </main>

        <Footer/>
    </div>
  )
}

export default Public_Layout;
