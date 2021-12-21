import React, { useState } from 'react'

const LoginForm = (props) => {
  const Login = props.Login
  const error = props.error

  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = (e) => {
    e.preventDefault()

    Login(details)
  }

  return (
    <div className="Login-Wrapper">
      <form className="Login-Form" onSubmit={submitHandler}>
        {error != '' ? <div className="error">{error}</div> : ''}
        <div className="formgroup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="formgroup">
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
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
          <input type="submit" value="LOGIN" id="login" />
          <span>
            <a href="">New here? Create and account.</a>
          </span>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
