import { useStore } from '../context/Store.jsx'

export default function Profile(){
  const { state } = useStore()
  const u = state.user
  return (
    <div className="card">
      <h1>Your Profile</h1>
      <table className="table">
        <tbody>
          <tr><th>First Name</th><td>{u.firstName}</td></tr>
          <tr><th>Last Name</th><td>{u.lastName}</td></tr>
          <tr><th>Email</th><td>{u.email}</td></tr>
          <tr><th>Phone</th><td>{u.phone || '—'}</td></tr>
          <tr><th>Birthday</th><td>{u.birthday || '—'}</td></tr>
          <tr><th>Department</th><td>{u.department}</td></tr>
          <tr><th>Program</th><td>{u.program}</td></tr>
          <tr><th>Username</th><td>{u.username}</td></tr>
        </tbody>
      </table>
    </div>
  )
}
