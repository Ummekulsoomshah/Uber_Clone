import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/start'
import UserContextState from './context/UserContext'
import UserProtectorRoute from './pages/UserProtectorRoute'

const App = () => {
  return (
    <div>
      <UserContextState>

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/captain-register" element={<CaptainRegister />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/home" element={
            <UserProtectorRoute>
              <Home />
            </UserProtectorRoute>
          }/>

        </Routes>
      </UserContextState>
    </div>
  )
}

export default App