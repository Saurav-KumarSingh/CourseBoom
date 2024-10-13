import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Course from './components/courses/Course'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/courses' element={<Course/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App