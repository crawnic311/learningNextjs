import React, { useState } from 'react'
import LoginForm from '../component/loginform'
import '../styles/globals.css'
import Layout from '../component/layout'

function MyApp({ Component, pageProps }) {
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [error, setError] = useState('')

  const Login = (details) => {
    setUser({
      name: details.name,
      email: details.email,
      password: details.password,
    })
    console.log(details)

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in')
    } else {
      console.log('Details do not match!')
      setError('Details do not match!')
    }
  }

  const Logout = () => {
    console.log('Logout')
  }

  return (
    <>
      {user.email != '' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  )
}

export default MyApp
