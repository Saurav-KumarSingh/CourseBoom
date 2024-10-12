import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App