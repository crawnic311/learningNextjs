import '../styles/globals.css'
import React, { useState } from 'react'
import LoginForm from './login/login'

function MyApp({ Component, pageProps }) {
  const adminUser = {
    email: 'dillon.craw@gmail.com',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const Login = (details) => {
    console.log(details)

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in')
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      })
    } else {
      console.log('Details do not match')
      setError('Details do not match')
    }
  }

  const Logout = () => {
    console.log('Logout')
    setUser({
      name: '',
      email: '',
      password: '',
    })
  }

  return (
    <div className="Foody-App">
      {user.email != '' ? (
        <div className="Welcome">
          <h2>
            Welcome,
            <span> {user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="Foody-Login">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  )
}

export default MyApp
