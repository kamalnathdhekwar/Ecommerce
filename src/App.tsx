import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Search from './pages/search'
import Home from './pages/home'
import Cart from './pages/cart'
function App() {
  return <Router>

    <Routes>

        <Route path="/" element ={<Home />} />
        <Route path="/search" element ={<Search />} />
        <Route path="/cart" element ={<Cart />} />
    </Routes>
  </Router>
}

export default App