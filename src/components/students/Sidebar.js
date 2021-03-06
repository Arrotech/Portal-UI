import React from 'react'
import { Link } from 'react-router-dom'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ListIcon from '@material-ui/icons/List';
import SchoolIcon from '@material-ui/icons/School';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import SubjectIcon from '@material-ui/icons/Subject';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PeopleIcon from '@material-ui/icons/People';
import '../../assets/css/students/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <p><Link className="sidebar__links sidebar__header sidebar__dashboardHeader" to="/dashboard"><SidebarOption title="DASHBOARD" Icon={DashboardIcon} /></Link></p><br/><br/>
            <Link className="sidebar__links sidebar__header" to="/view-results"><SidebarOption title="EXAMINATIONS" Icon={MenuBookIcon} /></Link>
            <Link className="sidebar__links" to="/view-results"><SidebarOption title="View Results" Icon={LibraryBooksIcon} /></Link>
            <Link className="disabled-link" to="/exams"><SidebarOption title="Supplementary" Icon={SmsFailedIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/fee-statement"><SidebarOption title="FEES" Icon={CreditCardIcon} /></Link>
            <Link className="sidebar__links" to="/fee-statement"><SidebarOption title="Fee Statement" Icon={MonetizationOnIcon} /></Link>
            <Link className="disabled-link" to="/fees"><SidebarOption title="Fee Structure" Icon={LocalAtmIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/checklist"><SidebarOption title="ACTIVITY" Icon={LocalActivityIcon} /></Link>
            <Link className="sidebar__links" to="/view-units"><SidebarOption title="View Units" Icon={ListIcon} /></Link>
            <Link className="sidebar__links" to="/view-streams"><SidebarOption title="View Streams" Icon={ListIcon} /></Link>
            <Link className="sidebar__links" to="/units-registration"><SidebarOption title="Unit Registration" Icon={VerifiedUserIcon} /></Link>
            <Link className="sidebar__links" to="/checklist"><SidebarOption title="Checklist" Icon={PlaylistAddCheckIcon} /></Link>
            <Link className="disabled-link" to="/library"><SidebarOption title="Library" Icon={LibraryBooksIcon} /></Link>
            <Link className="disabled-link" to="/hostel"><SidebarOption title="Book Hostel" Icon={HomeIcon} /></Link>
            <Link className="disabled-link" to="/evaluation"><SidebarOption title="Evaluation" Icon={ListIcon} /></Link>
            <Link className="disabled-link" to="/graduation"><SidebarOption title="Graduation" Icon={SchoolIcon} /></Link><br/>
            <Link className="sidebar__links sidebar__header" to="/dashboard"><SidebarOption title="CO-CURRICULUM" Icon={LocalActivityIcon} /></Link>
            <Link className="disabled-link" to="/sports"><SidebarOption title="Sports" Icon={SportsSoccerIcon} /></Link>
            <Link className="disabled-link" to="/societies"><SidebarOption title="Societies" Icon={PeopleIcon} /></Link><br/>
        </div>
    )
}

export default Sidebar
