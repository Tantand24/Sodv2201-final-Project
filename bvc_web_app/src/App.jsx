import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/pages/Signup.jsx'
import Login from './components/pages/Login.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Profile from './components/pages/Profile.jsx'
import Courses from './components/pages/Courses.jsx'
import Register from './components/pages/Register.jsx'
import Contact from './components/pages/Contact.jsx'
import NotFound from './components/pages/NotFound.jsx'
import Nav from './components/navigation/Navigation.component.jsx'
import SoftwareDevelopmentProgramRoute from "./routes/software-development-program/SoftwareDevelopmentProgram";
import SoftwareDevelopmentApprenticeProgramRoute from './routes/software-development-apprentice-program/SoftwareDevelopmentApprenticeProgram';
import SoftwareDevelopmentPostDiplomaRoute from './routes/software-development-post-diploma/SoftwareDevelopmentPostDiploma';

import Home from './routes/home/home.component';

export default function App(){
  const { state } = useStore()
  return (
    <>
      <Nav/>
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
          <SoftwareDevelopmentProgramRoute/>
          <SoftwareDevelopmentApprenticeProgramRoute/>
          <SoftwareDevelopmentPostDiplomaRoute/>
        <Home/>
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
