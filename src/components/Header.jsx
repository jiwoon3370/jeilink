import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="header">
      <h2 className="logo">JEILINK</h2>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "link active" : "link"}>
          Home
        </NavLink>

        <NavLink to="/board" className={({ isActive }) => isActive ? "link active" : "link"}>
          Board
        </NavLink>

        <NavLink to="/mentor" className={({ isActive }) => isActive ? "link active" : "link"}>
          Mentor
        </NavLink>

        {isLoggedIn ? (
          <button className="link" onClick={logout}>
            Logout
          </button>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? "link active" : "link"}>
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}