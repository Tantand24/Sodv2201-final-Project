import { useMemo, useState } from 'react'
import TermPicker from '../components/TermPicker.jsx'
import CourseCard from '../components/CourseCard.jsx'
import CourseCart from '../components/CourseCart.jsx'
import { useStore } from '../components/context/Store.jsx'

export default function Courses(){
  const { state, helpers } = useStore()
  const [q, setQ] = useState('')

  const list = useMemo(()=>{
    if(!state.selectedTerm) return []
    const program = state.user?.program
    let items = helpers.availableCoursesForTerm(state.selectedTerm, program)
    if(q){
      const s = q.toLowerCase()
      items = items.filter(c => c.name.toLowerCase().includes(s) || c.courseCode.toLowerCase().includes(s))
    }
    return items
  }, [state.selectedTerm, state.user, q])

  return (
    <div className="grid cols-2">
      <div className="card">
        <h1>Courses</h1>
        <p className="kicker">Search and add courses (2–5 per term; no duplicates per term).</p>
        <div className="stack">
          <TermPicker />
          <input placeholder="Search by name or code..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <div className="space"></div>
        <div className="grid">
          {state.selectedTerm ? (
            list.length ? list.map(c => <CourseCard key={c.courseCode} c={c} selectedTerm={state.selectedTerm} />) : <small className="muted">No courses match.</small>
          ) : <small className="muted">Pick a term to see courses.</small>}
        </div>
      </div>
      <CourseCart />
    </div>
  )
}
