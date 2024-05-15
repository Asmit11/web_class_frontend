import React, { useState } from "react";
import { toast } from "react-toastify";


const Login = () => {

  //make a useState for each input
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //make a error state
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  //validation
  const validation = () => {
    let isValid = true;

    if (email.trim() === '' || !email.includes('@')) {
      setEmailError("Email is empty or invalid!")
      isValid = false
    }

    if (password.trim() === '' || !password.includes('@')) {
      setPasswordError("Password is required!")
      isValid = false
    }
    return isValid;

  }

  //make a function to handle the form submission
  const handleLogin = (e) => {
    e.preventDefault()

    //validation
    if (!validation()) {
      return
    }

    toast.success('Login button clicked!')
  }
  return (
    <div className="container">
      <h1>Login to your account</h1>

      <form className="w-50">
        <label>Email Address {email}</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter Your email" />

        {
          emailError && <p className="text-danger">{emailError}</p>
        }

        <label>Password {password}</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Your password" />

        {
          passwordError && <p className="text-danger">{passwordError}</p>
        }

        <button onClick={handleLogin} className="btn btn-danger mt-2 w-100" >Login</button>


      </form>

    </div>
  )
}

export default Login;