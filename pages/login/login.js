import React from 'react'

const Login = () => {
  return (
    <div className="Login-Wrapper">
      <form className="Login-Form">
        <input type="text" />
        <input type="password" />
        <span>Forgot Password?</span>
        <button>Login</button>
        <span>New here? Create and account.</span>
      </form>
    </div>
  )
}
export default Login
