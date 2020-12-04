import React from 'react'
import '../assets/css/FinanceLogin.css'
import { Link } from 'react-router-dom'

function FinanceLogin() {
    return (
        <div className="financeLogin">
            <div className="financeLogin__container">
                <p className="financeLogin__containerHeader1">Accountant Portal</p>
                <p className="financeLogin__containerHeader2">Login to your account</p>
                <div className="financeLogin__form">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <p className="financeLogin__radioBtn"><input type="checkbox" /><span className="financeLogin__checkBoxText">Remember me</span></p>
                    <input className="financeLogin__btn" type="submit" value="Login" />
                    <p>Forget Password? <Link className="navBar__rightLinks" to="/reset"><span>Reset</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default FinanceLogin
