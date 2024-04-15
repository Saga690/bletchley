import React from 'react'
import { useContext } from "react";
import "./Register.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContext } from '../../context/AuthContext';

const Register = () => {

  const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);

  return (
    <div className='main'>
      <video autoPlay muted loop id="myVideo">
        <source src="./src/assets/videobg2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className='wrapper'>
        <form onSubmit={registerUser}>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })} />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })} />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })} />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          <button type='submit'>{isRegisterLoading ? "Creating your account" : "Register"}</button>
          <div className="register-link">
            <p>Already have an account? <a href="/login">Sign In</a></p>
          </div>
        </form>
      </div>
      {registerError?.error && (<div className="alert">
        {registerError?.message}
      </div>)}
    </div>
  )
}

export default Register