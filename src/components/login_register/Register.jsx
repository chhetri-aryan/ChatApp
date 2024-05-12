import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
const Register = () => {

    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const URL = "http://localhost:5000/api/auth/register"

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user)
            });

            const res_data = await response.json();
            console.log(res_data.msg)

            if (response.ok) {
                //token

                setUser({
                    username: "", phone: "", email: "", password: ""
                });

                alert("Registration Successfully, Please Login");
                navigate("/")

            } else {
                alert(res_data.msg);

            }

        } catch (error) {
            console.log("Register", error)
            navigate('*');
        }
    }

    return (
        <>
            <h1>Welcome to Registration Page</h1>

            <div>
                <form action="#" onSubmit={handleSubmit}>

                    <label htmlFor="username">Username:
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={user.username}
                            onChange={handleInput}
                            required
                        />
                    </label>
                    <br />

                    <label htmlFor="phone">Phone Number:
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={user.phone}
                            onChange={handleInput}
                            autoComplete="phone"
                            required
                        />
                    </label>
                    <br />

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
                            <NavLink to="/">
                                Register here!
                            </NavLink>
                        </span>
                    </div>

                </form>
            </div>

        </>

    )
}

export default Register