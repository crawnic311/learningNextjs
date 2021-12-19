import '../styles/globals.css'
import React, { useState } from 'react'
import Login from './login/login'

function MyApp({ Component, pageProps }) {
  const adminUser = {
    email: 'dillon.craw@gmail.com',
    password: 'Smouds311*',
  }

  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const login = (details) => {
    console.log(details)
  }

  const logout = () => {
    console.log('Logout')
  }

  return (
    <div className="Foody-App">
      {user.email != '' ? (
        <div className="Welcome">
          <h2>
            Welcome,
            <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default MyApp
