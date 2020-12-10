import React, { useState } from 'react'
import '../../assets/css/students/DashboardHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useHistory } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import Sidebar from '../admins/Sidebar'
import { getUser, removeUserSession } from '../../Utils/Common'
import Logo from '../../assets/img/ppic.jpg'

function DashboardHeader(props) {

    const user = getUser()
    const history = useHistory()
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        removeUserSession();
        history.push('/staff')
    }

    return (
        <div>
            <div className="dashboardHeader">
                <div className="dashboardHeader__left">
                    <Link className="dashboardHeader__menuIcon" to="#"><MenuIcon onClick={showSidebar} /></Link>
                </div>
                <div className="dashboardHeader__center">
                    <input type="text" placeholder="Search" />
                    <SearchIcon className="dashboardHeader__searchIcon" />
                </div>
                <div className="dashboardHeader__right">
                    <NotificationsActiveIcon className="dashboardHeader__notificationsIcon" />
                    <AppsIcon />
                    <div className="dashboardHeader__userAccount">
                        <img src={Logo} alt="Profile Pic" />
                        <Button className="dashboardHeader__username" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <ArrowDropDownIcon className="dashboardHeader__dropdownIcon" />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Signed in as <span className="dashboardHeader__username">{user.firstname}</span></MenuItem><hr />
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul onClick={showSidebar}>
                    <Link className="dashboardHeader__close" to="#"><CloseIcon /></Link>
                    <Sidebar />
                </ul>
            </nav>
        </div>
    )
}

export default DashboardHeader
