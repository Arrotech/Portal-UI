import React from 'react'
import '../../assets/css/students/Profile.css'
import ProfilePic from '../../assets/img/ppic.jpg'

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
                <img src={ProfilePic} alt="Profile PIC" />
            </div>
            <div className="profile__right">
                <p><span>Name:</span> Kevin Njoroge Gitundu</p>
                <p><span>Email:</span> kevin@gmail.com</p>
                <p><span>Registration No:</span> sc200-1358-2014</p>
                <p><span>Course:</span> Bsc. Mathematics & Computer Science</p>
                <p><span>Department:</span> Mathematics</p>
            </div>
        </div>
    )
}
