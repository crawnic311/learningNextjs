import React, { useState } from 'react'
import LoginForm from '../component/loginform'
import '../styles/globals.css'
import Layout from '../component/layout'

function MyApp({ Component, pageProps }) {
  const adminUser = {
    name: '',
    email: '',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })

  return (
    <>
      {user.email != '' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LoginForm />
      )}
    </>
  )
}

export default MyApp
