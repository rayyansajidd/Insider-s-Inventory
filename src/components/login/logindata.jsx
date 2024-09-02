import React from 'react'
import './logindata.css'
import InputField from '../InputField/InputField'
import Btn from '../btn/Btn'
import Checkbox from '../checkbox/checkbox'


export default function logindata() {
  return (

    <div className='login-container'>


      <div className='login-heading'>Log in to Submit an Off-Market Property</div>

      <div className="login-username">Username</div>
      <InputField
        placeholder='John Doe'

      />
      <div className="login-password">Password</div>

      <InputField
        placeholder='Enter your password'
      />

      <div className="login-extra">

        
        <div className="remember-me">

        <Checkbox text='Remember Me' />
        <p>Forgot Password?</p>

        </div>
       
      </div>

      <div className="login-btn">
        <Btn
          label='Sign In'
        />
      </div>

      <div className="end-text">Don't have an account?<span>  Sign up  </span></div>

    </div>


  )
}
