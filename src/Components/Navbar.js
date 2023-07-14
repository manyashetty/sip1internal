import React from 'react'
import style from '../style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
         <nav id="nav" className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Education Sector - VIDYA</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Course Offered</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
export default Navbar