import { Routes, Route, Navigate } from 'react-router-dom'
import Chat from './pages/Chat/chat'
import Register from './pages/Register/Register'
import Login from './pages/Login/login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Chat /> : <Login />} />
        <Route path="/register" element={user ? <Chat /> : <Register />} />
        <Route path="/login" element={user ? <Chat /> : <Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
