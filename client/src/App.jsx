import { Routes, Route, Navigate } from 'react-router-dom'
import Chat from './pages/Chat/chat'
import Register from './pages/Register/Register'
import Login from './pages/Login/login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
