import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Courses from './pages/Courses.jsx'
import Register from './pages/Register.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
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

export default function App(){
  const { state } = useStore()
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to={state.user ? '/dashboard' : '/signup'} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/courses" element={<RequireAuth><Courses /></RequireAuth>} />
          <Route path="/register" element={<RequireAuth><Register /></RequireAuth>} />
          <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

function RequireAuth({children}){
  const { state } = useStore()
  if(!state.user) return <Navigate to="/signup" />
  return children
}
