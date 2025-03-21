import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import ListingDetails from './Components/ListingDetails'
function App() {
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