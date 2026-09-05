import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'

import Home from './pages/Home.jsx'
import Manager from './pages/Manager.jsx'
import Admin from './pages/Admin.jsx'
import User from './pages/User.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

import Products from './components/product/Products.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/user' element={<User />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/manager' element={<Manager />} />

      <Route path='/products' element={<Products />} />

      <Route path='*' element={<h1>404 Not Found</h1>} />

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
