import React from './Navbar.css'
import {Link,useNavigate} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  function nav(){
    navigate("/login");
  }
  return (
    <>
     <div className="navbar">
      <div className="navContainer">
      <Link to="/">
        <span className="logo" style={{color:"inherit",textDecoration:"none",color:"white"}}>SaimBooking</span>
        </Link>
       {user?  user.username :<div className="navItems">
           <button className="navButton" onClick={nav}>Login</button>
           <button className="navButton">Registration</button>
        </div>}
      </div>
        
     </div> 
    </>
  )
}

export default Navbar
