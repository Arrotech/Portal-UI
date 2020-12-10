import React from 'react'
import { Link } from 'react-router-dom'
import SidebarOption from './SidebarOption'
import CardTravelIcon from '@material-ui/icons/CardTravel';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import '../../assets/css/admins/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="sidebar__links sidebar__header"><SidebarOption title="USERS" Icon={PeopleIcon} /></Link>
            <Link className="sidebar__links" to="/staff/register"><SidebarOption title="staff" Icon={PersonIcon} /></Link>
            <Link className="sidebar__links" to="/student/register"><SidebarOption title="students" Icon={SchoolIcon} /></Link>
            <Link className="sidebar__links" to="/add-accountant"><SidebarOption title="accountants" Icon={PersonIcon} /></Link>
            <Link className="sidebar__links" to="/manage-users"><SidebarOption title="Manage Users" Icon={EditIcon} /></Link><br />
            <Link className="sidebar__links sidebar__header"><SidebarOption title="SETTINGS" Icon={SettingsIcon} /></Link>
            <Link className="sidebar__links" to="/admin-account"><SidebarOption title="Account" Icon={PersonIcon} /></Link>
            <Link className="sidebar__links" to="/admin-preferences"><SidebarOption title="Preferences" Icon={CardTravelIcon} /></Link>
            <Link className="sidebar__links" to="/admin-notifications"><SidebarOption title="Notifications" Icon={NotificationsActiveIcon} /></Link>
        </div>
    )
}

export default Sidebar
