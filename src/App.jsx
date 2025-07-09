import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Header from './components/Header'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
