import React, { useState } from 'react';
import { toast } from "react-toastify";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container'>
      <form>
        <h1>Login to your Account</h1>
        <form className='w-50'></form>
        <label>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" className='form-control' placeholder='Enter your email' />
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' placeholder='Enter your password' />

        <button onClick={handleLogin} className='btn btn-danger mt-2 w-100'>Login</button>

      </form>
    </div>
  );
};

const Loginpage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("login button clicked");

  };

  return (
    <Login handleLogin={handleLogin} />
  );
};

export default Loginpage;
