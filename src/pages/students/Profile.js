import React from 'react'
import '../../assets/css/students/Profile.css'
import ProfilePic from '../../assets/img/ppic.jpg'
import EditIcon from '@material-ui/icons/Edit'

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
                <div className="profile__leftImage">
                    <img src={ProfilePic} alt="Profile PIC" />
                    <button className="profile__edit">Edit <EditIcon className="profile__editIcon"/></button>
                </div>
            </div>
            <div className="profile__right">
                <p className="profile__rightName">Harun Gachanja</p>
                <p className="profile__rightCourse">Bsc. Mathematics and Computer Science</p>
                <h4>Personal Details</h4>
                <div className="profile__rightPersonalInfo">
                    <div className="profile__rightInfoLeft">
                        <p>Registration No.</p>
                        <p>Email</p>
                        <p>Gender</p>
                    </div>
                    <div className="profile__rightInfoRight">
                        <p>sc200-1358-2014</p>
                        <p>kevin@gmail.com</p>
                        <p>Male</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
