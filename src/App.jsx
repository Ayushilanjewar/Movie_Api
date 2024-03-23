import React from 'react';
//import Header from '/Header.jsx'
// import Header from './component/Header.jsx'
import Movies from './pages/Movies.jsx'
// import Footer from './component/Footer.jsx'
import './App.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Routes,Route } from 'react-router-dom';
// import Movie from './pages/Movie.jsx';
import Movie from './pages/sample.jsx';
const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        {/* <Route path='/' element={<Movies />} />  */}
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/'  Component={Movies} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App