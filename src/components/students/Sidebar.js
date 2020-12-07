import React from 'react'
import { Link } from 'react-router-dom'
import SidebarOption from './SidebarOption'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import DraftsIcon from '@material-ui/icons/Drafts';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ListIcon from '@material-ui/icons/List';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import SubjectIcon from '@material-ui/icons/Subject';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PeopleIcon from '@material-ui/icons/People';
import '../../assets/css/students/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="sidebar__links sidebar__header" to="/exams"><SidebarOption title="EXAMINATIONS" Icon={MenuBookIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="View Results" Icon={LibraryBooksIcon} /></Link>
            <Link className="sidebar__links" to="/exams"><SidebarOption title="Supplementary" Icon={SmsFailedIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/fees"><SidebarOption title="FEES" Icon={CreditCardIcon} /></Link>
            <Link className="sidebar__links" to="/exams"><SidebarOption title="Fee Statement" Icon={MonetizationOnIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Fee Structure" Icon={LocalAtmIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/exams"><SidebarOption title="UNITS" Icon={SubjectIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Registration" Icon={VerifiedUserIcon} /></Link><br/><br/>
            <Link className="sidebar__links sidebar__header" to="/exams"><SidebarOption title="ACTIVITY" Icon={LocalActivityIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Checklist" Icon={ListIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Evaluation" Icon={PlaylistAddCheckIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Graduation" Icon={SchoolIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/exams"><SidebarOption title="CO-CURRICULUM" Icon={LocalActivityIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Sports" Icon={SportsSoccerIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Societies" Icon={PeopleIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/exams"><SidebarOption title="SETTINGS" Icon={SettingsIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Account" Icon={PersonIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Preferences" Icon={CardTravelIcon} /></Link>
            <Link className="sidebar__links" to="/fees"><SidebarOption title="Notifications" Icon={NotificationsActiveIcon} /></Link>
        </div>
    )
}

export default Sidebar
