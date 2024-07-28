// import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div id="topnav">
            <ul id="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/albums">Albums</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Header

