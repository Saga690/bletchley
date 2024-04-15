import React from 'react'
import './login.css'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="main">
      <video autoPlay muted loop id="myVideo">
        <source src="./src/assets/videobg1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder='Email' required />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type='submit'>Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login