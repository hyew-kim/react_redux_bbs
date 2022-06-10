import { NavLink } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div>PLCAE FOR LOGO</div>
      <div className="navbar-buttons">
        <NavLink className="navbar-button" to="/" >Home </NavLink>
        <NavLink className="navbar-button" to="/sign-in" >Sign In </NavLink>
        <NavLink className="navbar-button" to="/sign-up" >Sign Up </NavLink>
      </div>
    </div>
  )
}