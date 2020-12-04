import React from 'react'
import '../assets/css/StudentLogin.css'
import { Link } from 'react-router-dom'

function StudentLogin() {
    return (
        <div className="studentLogin">
            <div className="studentLogin__container">
                <div className="studentLogin__left">
                    <div className="studentLogin__topLeft">Student Portal</div>
                    <div className="studentLogin__centered">
                        <p>There is always a room to increase your knowledge.</p>
                        <p>Secure you future with a course.</p>
                    </div>
                    <div className="studentLogin__centeredParagraph">
                        @ 2019 ARROTECH DESINGs
                    </div>
                </div>
                <div className="studentLogin__right">
                    <h1>Welcome back,</h1>
                    <h2>Login to your account</h2>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <p className="studentLogin__radioBtn"><input type="checkbox" /><span className="studentLogin__checkBoxText">Remember me</span></p>
                    <input className="studentLogin__btn" type="submit" value="Login" />
                    <p>Forget Password? <Link className="navBar__rightLinks" to="/reset"><span>Reset</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin
