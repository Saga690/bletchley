import React, { useContext } from 'react'
import './login.css'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

  const { loginUser, loginInfo, loginError, updateLoginInfo, isLoginLoading } = useContext(AuthContext);

  return (
    <div className="main">
      <video autoPlay muted loop id="myVideo">
        <source src="./src/assets/videobg1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className='wrapper'>
        <form onSubmit={loginUser}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder='Email' required onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})} />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})} />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type='submit'>{isLoginLoading ? "Logging you in" : "Login"}</button>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
      {loginError?.error && (<div className="alert">
        {loginError?.message}
      </div>)}
    </div>
  )
}

export default Login