import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Seats from './pages/Seats';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movie/:id/seats/:id' element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App