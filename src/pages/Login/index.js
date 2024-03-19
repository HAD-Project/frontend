import React from 'react'
import LoginCard from './components/LoginCard'
import loginbg from '../../assets/images/login/login-bg.jpg'
import './styles/login.css'

const Login = () => {
  return (
    <div className="login-page" 
    style={{
        backgroundImage: `url(${loginbg})`,
      }}>
        <LoginCard/>
    </div>
  )
}

export default Login