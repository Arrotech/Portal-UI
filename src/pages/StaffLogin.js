import React from 'react'
import '../assets/css/StaffLogin.css'
import { Link } from 'react-router-dom'

function StaffLogin() {
    return (
        <div className="staffLogin">
            <div className="staffLogin__container">
                <p className="staffLogin__containerHeader1">Staff Portal</p>
                <p className="staffLogin__containerHeader2">Login to your account</p>
                <div className="staffLogin__form">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <p className="staffLogin__radioBtn"><input type="checkbox" /><span className="staffLogin__checkBoxText">Remember me</span></p>
                    <input className="staffLogin__btn" type="submit" value="Login" />
                    <p>Forget Password? <Link className="navBar__rightLinks" to="/reset"><span>Reset</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default StaffLogin
