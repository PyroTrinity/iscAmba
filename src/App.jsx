import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Nav from './components/Nav'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Nav" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
