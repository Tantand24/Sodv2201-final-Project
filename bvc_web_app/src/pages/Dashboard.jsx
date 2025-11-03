import { useStore } from '../context/Store.jsx'

export default function Dashboard(){
  const { state } = useStore()
  const u = state.user
  return (
    <div className="grid cols-2">
      <div className="card">
        <h1>Welcome, {u.firstName} 👋</h1>
        <div className="kicker">Your student dashboard</div>
        <div className="space"></div>
        <table className="table">
          <tbody>
            <tr><th>Student / Admin</th><td>Student</td></tr>
            <tr><th>Student ID</th><td>{u.id}</td></tr>
            <tr><th>Department</th><td>{u.department}</td></tr>
            <tr><th>Program</th><td>{u.program}</td></tr>
            <tr><th>Selected Term</th><td>{state.selectedTerm || '—'}</td></tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h2>Next steps</h2>
        <ol>
          <li>Pick a term on the <a href="/courses">Courses</a> page</li>
          <li>Add 2–5 courses to your selection</li>
          <li>Submit your registration</li>
        </ol>
      </div>
    </div>
  )
}
