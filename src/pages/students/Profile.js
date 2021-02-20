import React, {useEffect, useState} from 'react'
import '../../assets/css/students/Profile.css'
import ProfilePic from '../../assets/img/ppic.jpg'
import EditIcon from '@material-ui/icons/Edit'
import { getUser, getToken } from '../../Utils/Common'
import { Link } from 'react-router-dom'

export const Profile = () => {
    const user = getUser()
    const token = getToken()
    const [loggedInUser, setLoggedInUser] = useState({
        admission_no: "sc200-1358-2014",
        campus_name: "main",
        course: "bachelor of science",
        department: "mathematics",
        email: "kevin@gmail.com",
        firstname: "Kevin",
        gender: "male",
        hostel: "leopard",
        institution: "Jomokenyatta University of Agriculture and Technology",
        lastname: "Njotoge",
        surname: "Gitundu"
    })
    const admission = user.admission_no

    useEffect(() => {
        const getLoggedInUser = async () => {
            await fetch(`https://njc-school-portal.herokuapp.com/api/v1/students/users/${admission}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const loggedInUser = data.data
                    setLoggedInUser(loggedInUser)
                    console.log(loggedInUser)
                });
        };
        getLoggedInUser();
    }, []);

    return (
        <div className="profile">
            <div className="profile__left">
                <div className="profile__leftImage">
                    <img src={ProfilePic} alt="Profile PIC" />
                    <button className="profile__edit">Edit <EditIcon className="profile__editIcon" href="https://njc-school-portal.herokuapp.com/api/v1/uploads"/></button>
                </div>
            </div>
            <div className="profile__right">
                <p className="profile__rightName">{user.firstname} {user.lastname} {user.surname}</p>
                <p className="profile__rightCourse">{loggedInUser.course}</p>
                <h4>Personal Details</h4>
                <hr/>
                <div className="profile__rightPersonalInfo">
                    <div className="profile__rightInfoLeft">
                        <p>Registration No.</p>
                        <p>Email</p>
                        <p>Gender</p>
                        <p>Department</p>
                        <p>Campus</p>
                        <p>Institution</p>
                        <p>Hostel</p>
                    </div>
                    <div className="profile__rightInfoRight">
                        <p>{loggedInUser.admission_no}</p>
                        <p>{loggedInUser.email}</p>
                        <p>{loggedInUser.gender}</p>
                        <p>{loggedInUser.department}</p>
                        <p>{loggedInUser.campus_name}</p>
                        <p>{loggedInUser.institution}</p>
                        <p>{loggedInUser.hostel}</p>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}
