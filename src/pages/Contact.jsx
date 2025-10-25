import { useState } from 'react'

export default function Contact(){
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  function submit(e){
    e.preventDefault()
    if(!msg.trim()) return
    const payload = { id: Date.now(), message: msg.trim() }
    const box = JSON.parse(localStorage.getItem('bow-a1-contact') || '[]')
    localStorage.setItem('bow-a1-contact', JSON.stringify([payload, ...box]))
    setSent(true)
    setMsg('')
  }

  return (
    <div className="grid cols-2">
      <div className="card">
        <h1>Contact Admin</h1>
        <form className="stack" onSubmit={submit}>
          <textarea rows="6" placeholder="Write your message..." value={msg} onChange={e=>setMsg(e.target.value)} />
          <button className="btn">Send</button>
        </form>
        {sent && <small className="muted">Message sent (stored locally for A1).</small>}
      </div>
      <div className="card">
        <h2>Why this matters</h2>
        <p className="kicker">For Assignment 1, we simulate the flow using arrays/objects and localStorage only.</p>
      </div>
    </div>
  )
}
