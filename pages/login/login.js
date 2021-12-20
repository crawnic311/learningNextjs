import React, { useState } from 'react'

const LoginForm = (props) => {
  const Login = props.Login
  const error = props.error

  const [details, setDetails] = useState({ email: '', password: '' })

  const submitHandler = (e) => {
    e.preventDefault()

    Login(details)
  }

  return (
    <div className="Login-Wrapper">
      <form className="Login-Form" onSubmit={submitHandler}>
        {/*EROOR*/}
        <div className="formgroup">
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="formgroup">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <span>Forgot Password?</span>
        </div>
        <div className="formgroup">
          <input type="submit" value="LOGIN" />
          <span>
            <a href="">New here? Create and account.</a>
          </span>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
