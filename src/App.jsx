import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import ListingDetails from './Components/ListingDetails'
import Aos from 'aos'
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    Aos.init({once: true, duration: 1000})
},[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes> 
    </Router>
  )
}

export default App