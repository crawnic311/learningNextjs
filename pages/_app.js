import '../styles/globals.css'
import React, { useState } from 'react'
import LoginForm from './login/login'
import HomeHeader from './homepage/homeheader'
import Homepage from './homepage/homepage'
import RecipeNav from './homepage/recipenav'
import CreateRecipe from './create/createrecipe'

function MyApp({ Component, pageProps }) {
  const adminUser = {
    email: 'dillon.craw@gmail.com',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [nav, setNav] = useState({
    recipes: true,
    create: false,
    nutrition: false,
    about: false,
  })

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
      console.log('Details do not match!')
      setError('Details do not match!')
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

  const Navigator = (navigate) => {
    setNav({})
  }

  return (
    <div className="Foody-App">
      {user.email != '' ? (
        <>
          <header className="Foody-Header">
            <HomeHeader />
            {/*<button onClick={Logout}>Logout</button>*/}
          </header>
          {/*<div className="Foody-Header-Homepage">
            <Homepage />
            <div className="Recipe-Nav-Wrapper">
              <RecipeNav />
            </div>
      </div> */}
          <div className="Foody-Create">
            <CreateRecipe />
          </div>
        </>
      ) : (
        <div className="Foody-Login">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  )
}

export default MyApp
