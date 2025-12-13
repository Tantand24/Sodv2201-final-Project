import { Link } from "react-router-dom";
import { useStore } from "../context/Store";

function Nav() {
  const { state, logout } = useStore()
  return (
    <div className="nav">
      <div className="flex">
        <Link to="/" className="brand">Bow Registration</Link>
        <span className="badge">A1 Frontend (Mock Data)</span>
      </div>
      <div className="navlinks">
        {!state.user && (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        {state.user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact</Link>
            <button className="btn alt" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Nav;