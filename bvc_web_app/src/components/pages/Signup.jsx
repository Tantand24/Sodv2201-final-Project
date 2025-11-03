import { useState } from 'react'
import { useStore } from '../components/context/Store.jsx'
import { PROGRAMS } from '../components/data/mockData.js'

export default function Signup(){
  const [form, setForm] = useState({
    firstName:'', lastName:'', email:'', phone:'', birthday:'', department:'SD',
    program:'', username:'', password:''
  })
  const { login } = useStore()

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function submit(e){
    e.preventDefault()
    if(!form.firstName || !form.lastName || !form.email || !form.username || !form.password || !form.program){
      alert('Please fill in all required fields.')
      return
    }

    const id = 'S' + Math.floor(100000 + Math.random()*899999)
    const user = { id, ...form }

    localStorage.setItem('bow-a1-user', JSON.stringify(user))
    login(user)
  }

  return (
    <div className="grid cols-2">
      <div className="card">
        <h1>Create your student account</h1>
        <p className="kicker">After signup you will be redirected to your dashboard.</p>
        <form className="stack" onSubmit={submit}>
          <div className="stack">
            <label className="label">First Name*</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} />
          </div>
          <div className="stack">
            <label className="label">Last Name*</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} />
          </div>
          <div className="stack">
            <label className="label">Email*</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="stack">
            <label className="label">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="stack">
            <label className="label">Birthday</label>
            <input type="date" name="birthday" value={form.birthday} onChange={handleChange} />
          </div>
          <div className="stack">
            <label className="label">Department</label>
            <select name="department" value={form.department} onChange={handleChange}>
              <option value="SD">Software Development (SD)</option>
            </select>
          </div>
          <div className="stack">
            <label className="label">Program*</label>
            <select name="program" value={form.program} onChange={handleChange}>
              <option value="" disabled>-- select program --</option>
              {PROGRAMS.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
            </select>
          </div>
          <div className="stack">
            <label className="label">Username*</label>
            <input name="username" value={form.username} onChange={handleChange} />
          </div>
          <div className="stack">
            <label className="label">Password*</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} />
          </div>
          <button className="btn">Sign up</button>
        </form>
      </div>
      <div className="card">
        <h2>Already have an account?</h2>
        <p className="kicker">If you already signed up earlier on this device, you can sign in.</p>
        <a className="btn alt" href="/login">Go to Login</a>
      </div>
    </div>
  )
}
