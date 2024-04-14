import React from 'react'
import "./Register.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className='main'>
      <video autoPlay muted loop id="myVideo">
        <source src="./src/assets/videobg2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className='wrapper'>
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          <button type='submit'>Register</button>
          <div className="register-link">
            <p>Already have an account? <a href="/login">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register