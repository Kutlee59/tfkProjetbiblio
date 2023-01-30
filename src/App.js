import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../src/pages/home/Home";
import Enfance from "../src/pages/enfance/Enfance";
import Contact from "../src/pages/contact/Contact";
import Romance from "../src/pages/romance/Romance";
import Education from "../src/pages/education/Education";


function App() {
    return (
        <>
        
        <BrowserRouter>
        <Routes>

            <Route path="/" exact element={<Home />} />
            <Route path="/romance" exact element={<Romance />} />
            <Route path="/enfance" exact element={<Enfance />} />
            <Route path="/education" exact element={<Education />} />
            <Route path="/contact" exact element={<Contact />} />

            
        </Routes>
    
        </BrowserRouter>
        </>
    )
}
export default App;
