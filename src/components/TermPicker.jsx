import { TERMS } from '../data/mockData.js'
import { useStore } from '../context/Store.jsx'

export default function TermPicker(){
  const { state, setTerm } = useStore()
  return (
    <div className="stack">
      <label className="label">Choose a term</label>
      <select value={state.selectedTerm || ''} onChange={e=>setTerm(e.target.value)}>
        <option value="" disabled>-- select a term --</option>
        {TERMS.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      {state.selectedTerm && <small className="muted">Selected term: {state.selectedTerm}</small>}
    </div>
  )
}
