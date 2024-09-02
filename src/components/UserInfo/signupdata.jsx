import React from 'react'

export default function signupdata() {
  return (
    <div>
      <div className='signup-container'>
      <h2 className='signup-heading'>Sign-Up To View Available Inventory Or To List A Property</h2>

      <InputField placeholder='John Doe' label='First name' />
      <InputField placeholder='John Doe' label='Last name' />
      <InputField placeholder='Name of your company' label='Company Name (optional)' />
      <InputField placeholder='Enter your Email here' label='Email' />

      <div className="checkbox-group">
        <Checkbox text='Investor' />
        <Checkbox text='Home Buyer' />
        <Checkbox text='Agent' />
        <Checkbox text='Fund/REIT Investment Buyer' />
      </div>

      <InputField placeholder='Enter your phone number' label='Phone number' />
      <InputField placeholder='Enter Password' label='Password' />

      <div className="policy-checkbox">
        <Checkbox text='I confirmed that I have read and accepted the Privacy Policy' />
      </div>

      <div className="signup-btn">
        <Btn label='Sign Up' />
      </div>

      <p className="end-text">Already have an account? <span className='login-link'>Log in</span></p>
    </div>
    </div>
  )
}
