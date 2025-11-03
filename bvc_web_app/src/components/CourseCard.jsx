import { useStore } from '../context/Store.jsx'

export default function CourseCard({ c, selectedTerm }){
  const { addToCart, removeFromCart, state, helpers } = useStore()
  const inCart = state.cart.some(x => x.courseCode===c.courseCode && x.term===selectedTerm)
  const alreadyRegistered = helpers.getRegisteredForTerm(selectedTerm).includes(c.courseCode)

  return (
    <div className="card">
      <div className="flex" style={{justifyContent:'space-between'}}>
        <div>
          <h3>{c.courseCode} – {c.name}</h3>
          <div className="kicker">{c.description}</div>
          <small className="muted">{c.term} • {c.start} → {c.end}</small>
        </div>
        <div className="stack" style={{minWidth:'140px'}}>
          {!alreadyRegistered && !inCart && <button className="btn" onClick={()=>addToCart({courseCode:c.courseCode, term:selectedTerm})}>Add</button>}
          {inCart && <button className="btn danger" onClick={()=>removeFromCart({courseCode:c.courseCode, term:selectedTerm})}>Remove</button>}
          {alreadyRegistered && <span className="badge">Already Registered</span>}
        </div>
      </div>
    </div>
  )
}
