import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from './pages/HomePage/HomePage'
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
      <Route index element={<HomePage />}/>
      </Routes>
      <Footer />
    </Router>
  </>
  )
}

export default App