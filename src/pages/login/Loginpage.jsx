import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validation = () => {
    let isValid = true;

    if (email.trim() === '' || !email.includes('@')) {
      setEmailError("Email is empty or invalid!");
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError("Password is required!");
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const data = {
      "email": email,
      "password": password
    }

    loginUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        // Setting token and user data in local storage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.userData));
      }

     
      toast.success('Login button clicked!');
    }).catch((error) => {
      // Handle API request error
      toast.error("An error occurred. Please try again later.");
    });
  }

  return (
    <div className="container">
      <h1>Login to your account</h1>

      <form className="w-50">
        <label>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter Your email" />
        {emailError && <p className="text-danger">{emailError}</p>}

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Your password" />
        {passwordError && <p className="text-danger">{passwordError}</p>}

        <button onClick={handleLogin} className="btn btn-danger mt-2 w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
