import React from 'react';
import './SignIn.css';
import Btn from '../../components/btn/Btn';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Logindata from '../../components/login/logindata';
import imagelogin from '../../assets/imgs/signImg.png'
import Footer from '../../components/footer/Footer'

export default function SignIn() {
    return (
        <div>
            <Navbar />

            <div class="login-page">
                <div class="image-container">
                    <img src={imagelogin} alt="House Image" />
                </div>
                <div class="login-box">
                    <Logindata />
                </div>
            </div>
 
            <div className="h-sec2 padding"></div>
            {/* footer  */}
            <Footer />
        </div>

    );
}
