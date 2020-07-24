import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";



const Login = props => {
  const initialLoginData = {
    username: '',
    password: ''
  }

  const initialError = '';

  const [loginData, setLoginData] = useState(initialLoginData)
  const [loginError, setLoginError] = useState(initialError)

  const { push } = useHistory()

  const handleSubmit = event => {
    event.preventDefault()

    axiosWithAuth().post('/api/login', loginData)
    .then(response => {
      console.log(response)
      const token = response.data.payload
      localStorage.setItem('token', token)
      setLoginData(initialLoginData)
      props.setLoggedIn(true)
      push('/bubbles')
    })
    .catch(error => setLoginError(error, "Please enter a valid username and password"))
  }

  const handleInput = event => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='username'
        placeholder='Enter a Username'
        value={loginData.username}
        onChange={handleInput}
        />
        <input 
        type='password'
        name='password'
        placeholder='Enter a Password'
        value={loginData.password}
        onChange={handleInput}
        />
        <button>Log In</button>
      </form>
    </div>
  )
}


export default Login;
