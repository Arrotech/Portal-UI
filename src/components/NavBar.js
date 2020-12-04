import React from 'react'
import '../assets/css/NavBar.css'
import SchoolIcon from '@material-ui/icons/School';


function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <SchoolIcon className="navBar__schoolIcon"/>
            </div>
            <div className="navBar__right">
                <p>Staff</p>
                <p>Student</p>
                <p>Finance</p>
            </div>
        </div>
    )
}

export default NavBar
