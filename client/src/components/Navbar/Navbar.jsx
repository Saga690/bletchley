import React, { useContext } from 'react'
import './Navbar.css'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext);

    return (
        <div className='container'>
            <div className="logo">Bletchley</div>
            <div className="user">You are logged in as <span className='span'>{user?.name}</span></div>
            <div className="options">
                <a href="/login" onClick={() => logoutUser()}><button className='button'>Logout</button></a>
            </div>
        </div>
    )
}

export default Navbar