import { useEffect } from 'react'
import { useStore } from '../context/Store.jsx'

export default function Login(){
  const { login } = useStore()
  useEffect(()=>{
    const saved = localStorage.getItem('bow-a1-user')
    if(saved){
      login(JSON.parse(saved))
    } else {
      alert('No saved user found on this device. Please sign up.')
      window.location.href='/signup'
    }
  }, [])
  return (
    <div className="card">
      <h1>Signing you in...</h1>
      <p className="kicker">If nothing happens, go back to <a href="/signup">Signup</a>.</p>
    </div>
  )
}
