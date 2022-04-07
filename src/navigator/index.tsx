import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Screens/Home'
import Contact from '../Screens/Contact'
import About from '../Screens/About/About';

export default function index() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

      </Routes>
    )
}
