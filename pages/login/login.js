import React from 'react'

const Login = () => {
  return (
    <div className="Login-Wrapper">
      <form className="Login-Form">
        {/*EROOR*/}
        <div className="formgroup">
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
          />
        </div>
        <div className="formgroup">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
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
export default Login
