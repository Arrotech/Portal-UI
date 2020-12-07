import React, { useState } from 'react'
import '../../assets/css/students/DashboardHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import Sidebar from './Sidebar'

function DashboardHeader() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <div className="dashboardHeader">
                <div className="dashboardHeader__left">
                    <Link className="dashboardHeader__menuIcon" to="#"><MenuIcon onClick={showSidebar} /></Link>
                </div>
                <div className="dashboardHeader__center">
                    <input type="text" placeholder="Search"/>
                    <SearchIcon className="dashboardHeader__searchIcon"/>
                </div>
                <div className="dashboardHeader__right">
                    <NotificationsActiveIcon className="dashboardHeader__notificationsIcon"/>
                    <PersonIcon/>
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
