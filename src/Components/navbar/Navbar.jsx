import React from './Navbar.css'

const Navbar = () => {
  return (
    <>
     <div className="navbar">
      <div className="navContainer">
        <span className="logo">SaimBooking</span>
        <div className="navItems">
           <button className="navButton">Login</button>
           <button className="navButton">Registration</button>
        </div>
      </div>
        
     </div> 
    </>
  )
}

export default Navbar
