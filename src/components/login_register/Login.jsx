import React from 'react'
import { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const {storeTokenInLS} = useAuth()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });

  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:5000/api/auth/login";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user)
      });

      const res_data = await response.json();

      if (response.ok) {
        //token
        storeTokenInLS(res_data.token);

        setUser({
          email: "", password: ""
        });

        alert(res_data.msg);
        navigate('/account');

      } else {
        alert(res_data.msg);
      }

      //  console.log(response)
    } catch (error) {
      console.log("Login", error)
      navigate('*');
    }


  };

  return (
    <>
      <h1>Welcome to Login Page</h1>

      <div>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleInput}
              autoComplete="email"
              required
            />
          </label>
          <br />
          <label htmlFor="password">Password:
            <input
              id="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <button>Login</button>

          <div>New user?
            <span style={{ cursor: "pointer" }}
            >
              <NavLink to="/register">
                Register here!
              </NavLink>
            </span>
          </div>

        </form>
      </div>


    </>

  )
}

export default Login