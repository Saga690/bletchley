import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
            <div className="logo">Bletchley</div>
            <div className="user">You are logged in as <span className='span'>Charles</span></div>
            <div className="options">
                <a href="/login"><button className='button'>Logout</button></a>
            </div>
        </div>
    )
}

export default Navbar