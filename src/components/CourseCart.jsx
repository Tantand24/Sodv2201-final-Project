import { useStore } from '../context/Store.jsx'

export default function CourseCart(){
  const { state, removeFromCart } = useStore()
  if(!state.selectedTerm) return null
  const items = state.cart.filter(i=>i.term===state.selectedTerm)

  return (
    <div className="card">
      <h2>Selected Courses ({items.length})</h2>
      {items.length===0 && <small className="muted">No courses selected yet for {state.selectedTerm}.</small>}
      {items.length>0 && (
        <table className="table">
          <thead><tr><th>Course</th><th></th></tr></thead>
          <tbody>
            {items.map(i=>(
              <tr key={i.courseCode}>
                <td>{i.courseCode}</td>
                <td style={{textAlign:'right'}}>
                  <button className="btn danger" onClick={()=>removeFromCart(i)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
