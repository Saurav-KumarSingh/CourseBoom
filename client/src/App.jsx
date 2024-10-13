import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Course from './components/courses/Course'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/courses' element={<Course/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App