import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Course from './components/courses/Course'
import Footer from './components/footer/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'
import Contact from './components/contact/Contact'
import RquestCourse from './components/request.jsx/Request'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-password/:userId' element={<ResetPassword/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/courses' element={<Course/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/request' element={<RquestCourse/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App