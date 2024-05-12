import React from 'react'
import { useAuth } from '../auth/auth'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

  const { user, userAuthentication, isLoggedIn} = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch user data when the component mounts
    userAuthentication();
  }, []);

  if (isLoggedIn) 
    return (

    <>
    <div style={{display:"inline-block"}}>
       <h1>Welcome { user.username}</h1>
      <NavLink
        to="/logout"
      >
        Logout
      </NavLink>
    </div>


     
    </>

  )

  else {
    <h1>Please Login</h1>
    // navigate("/")
  }
}

export default Account