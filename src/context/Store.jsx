import { createContext, useContext, useEffect, useReducer } from 'react'
import { COURSES, PROGRAMS } from '../data/mockData.js'

const initial = (() => {
  const saved = localStorage.getItem('bow-a1-state')
  return saved ? JSON.parse(saved) : {
    user: null,              // {id, firstName, lastName, email, program, department, username}
    selectedTerm: null,      // 'Spring' | 'Summer' | 'Fall' | 'Winter'
    cart: [],                // [{courseCode, term}]
    registrations: [],       // [{term, courses:[courseCode,...]}]
  }
})()

function reducer(state, action){
  switch(action.type){
    case 'LOGIN':
      return { ...state, user: action.user }
    case 'LOGOUT':
      return { ...state, user: null, selectedTerm: null, cart: [] }
    case 'SET_TERM':
      return { ...state, selectedTerm: action.term, cart: [] }
    case 'ADD_TO_CART': {
      const exists = state.cart.find(c => c.courseCode === action.item.courseCode && c.term === action.item.term)
      if(exists) return state
      return { ...state, cart: [...state.cart, action.item] }
    }
    case 'REMOVE_FROM_CART':{
      return { ...state, cart: state.cart.filter(c => !(c.courseCode === action.item.courseCode && c.term === action.item.term)) }
    }
    case 'SUBMIT_REGISTRATION': {
      const otherTerms = state.registrations.filter(r => r.term !== action.term)
      const newTerm = { term: action.term, courses: state.cart.map(c=>c.courseCode) }
      return { ...state, registrations: [...otherTerms, newTerm], cart: [] }
    }
    default:
      return state
  }
}

const Store = createContext()

export function StoreProvider({children}){
  const [state, dispatch] = useReducer(reducer, initial)

  useEffect(()=>{
    localStorage.setItem('bow-a1-state', JSON.stringify(state))
  }, [state])

  const login = (user) => dispatch({type:'LOGIN', user})
  const logout = () => dispatch({type:'LOGOUT'})
  const setTerm = (term) => dispatch({type:'SET_TERM', term})
  const addToCart = (item) => dispatch({type:'ADD_TO_CART', item})
  const removeFromCart = (item) => dispatch({type:'REMOVE_FROM_CART', item})
  const submitRegistration = (term) => dispatch({type:'SUBMIT_REGISTRATION', term})

  const getRegisteredForTerm = (term) => {
    const r = state.registrations.find(r=>r.term===term)
    return r ? r.courses : []
  }

  const availableCoursesForTerm = (term, programCode) => {

    return COURSES.filter(c => c.term === term && (!programCode || c.programs.includes(programCode)))
  }

  const value = {
    state, login, logout, setTerm, addToCart, removeFromCart, submitRegistration,
    helpers: { getRegisteredForTerm, availableCoursesForTerm, PROGRAMS, COURSES }
  }
  return <Store.Provider value={value}>{children}</Store.Provider>
}

export const useStore = () => useContext(Store)
