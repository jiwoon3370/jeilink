import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">JEILINK</h2>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
          Home
        </NavLink>

        <NavLink to="/board" className={({ isActive }) => isActive ? "link active" : "link"}>
          Board
        </NavLink>

        <NavLink to="/mentor" className={({ isActive }) => isActive ? "link active" : "link"}>
          Mentor
        </NavLink>

        <NavLink to="/login" className={({ isActive }) => isActive ? "link active" : "link"}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}