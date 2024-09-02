import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import imageSignup from '../../assets/imgs/signImg.png'
import InputField from '../../components/InputField/InputField'
import Checkbox from '../../components/checkbox/checkbox'
import Btn from '../../components/btn/Btn'
import './Signup.css'


export default function SignUp() {
    return (
        <div className='signup-page'>
            <Navbar />
            <div className="padding main-signup">

                <div className="image-container">
                    <img src={imageSignup} alt="HomeScreen" />
                </div>

                <div className='signup-container'>
                    <h2 className='signup-heading'>Sign-Up To View Available Inventory Or To List A Property</h2>
                    <div className='headings-signup'>First Name</div>
                    <InputField placeholder='John Doe' label='First name' />
                    <div className='headings-signup'>Last Name</div>
                    <InputField placeholder='John Doe' label='Last name' />
                    <div className='headings-signup'>Company Name</div>
                    <InputField placeholder='Name of your company' label='Company Name (optional)' />
                    <div className='headings-signup'>Email</div>
                    <InputField placeholder='Enter your Email here' label='Email' />

                    <div className="checkbox-group">
                        <Checkbox text='Investor' />
                        <Checkbox text='Home Buyer' />
                        <Checkbox text='Agent' />
                        <Checkbox text='Fund/REIT Investment Buyer' />
                    </div>
                    <div className='headings-signup'>Phone Number</div>
                    <InputField placeholder='Enter your phone number' label='Phone number' />
                    <div className='headings-signup'>Password</div>
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

<Footer/>

        </div>
    )
}
