import React from 'react'

const Loginpage = () => {
  return (
    <div className='container'>
      <form>
        <h1>Login to your Account</h1>
        <form className='w-50'></form>
        <label>Email Address</label>
        <input type="text" className='form-control' placeholder='Enter your email'></input>
        <label>Password</label>
        <input type="password" className='form-control' placeholder='Enter your password'></input>

        <button className='btn btn-danger'>Login</button>

      </form>
    </div>
  )
}

export default Loginpage