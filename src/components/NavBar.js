import React from 'react'
import '../assets/css/NavBar.css'
import SchoolIcon from '@material-ui/icons/School';
import {Link} from 'react-router-dom'


function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <SchoolIcon className="navBar__schoolIcon"/>
            </div>
            <div className="navBar__right">
                <Link className="navBar__rightLinks" to="/staff"><p>Staff</p></Link>
                <Link className="navBar__rightLinks" to="/student"><p>Student</p></Link>
                <Link className="navBar__rightLinks" to="/finance"><p>Finance</p></Link>
            </div>
        </div>
    )
}

export default NavBar
