import { Link } from "react-router-dom";
import { useStore } from './context/Store.jsx'

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
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}

export default Nav;