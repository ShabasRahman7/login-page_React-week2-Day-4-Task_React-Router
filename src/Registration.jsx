import React from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register</h1>
      <button onClick={()=> navigate('/login')}>Submit</button>
    </div>
  )
}

export default Registration