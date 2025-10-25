import { useStore } from '../context/Store.jsx'

export default function Register(){
  const { state, submitRegistration } = useStore()

  if(!state.selectedTerm){
    return (
      <div className="card">
        <h1>Registration</h1>
        <p className="kicker">Please choose a term and add courses first.</p>
        <a className="btn" href="/courses">Go to Courses</a>
      </div>
    )
  }

  const items = state.cart.filter(i=>i.term===state.selectedTerm)
  const canSubmit = items.length >= 2 && items.length <= 5

  function onSubmit(){
    if(!canSubmit){
      alert('You must select between 2 and 5 courses to register.')
      return
    }
    submitRegistration(state.selectedTerm)
    alert('Registration submitted for ' + state.selectedTerm)
  }

  return (
    <div className="grid cols-2">
      <div className="card">
        <h1>Review & Submit</h1>
        <p className="kicker">Term: {state.selectedTerm}</p>
        <table className="table">
          <thead><tr><th>#</th><th>Course</th></tr></thead>
          <tbody>
            {items.map((i,idx)=>(<tr key={i.courseCode}><td>{idx+1}</td><td>{i.courseCode}</td></tr>))}
          </tbody>
        </table>
        <div className="space"></div>
        <button className="btn" disabled={!canSubmit} onClick={onSubmit}>Submit Registration</button>
        {!canSubmit && <div className="kicker">Please select 2–5 courses.</div>}
      </div>
      <div className="card">
        <h2>Your past registrations</h2>
        {state.registrations.length===0 && <small className="muted">No past registrations.</small>}
        {state.registrations.length>0 && (
          <table className="table">
            <thead><tr><th>Term</th><th>Courses</th></tr></thead>
            <tbody>
              {state.registrations.map(r=>(
                <tr key={r.term}><td>{r.term}</td><td>{r.courses.join(', ')}</td></tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
