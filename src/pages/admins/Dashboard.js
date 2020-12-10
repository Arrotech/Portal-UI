import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/admins/DashboardHeader'
import '../../assets/css/admins/Dashboard.css'
import DashboardSummary from '../../components/admins/DashboardSummary';
import AddStaff from './AddStaff';
import AddStudent from './AddStudent';

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/admin/dashboard">
                        <DashboardSummary/>
                    </Route>
                    <Route path="/staff/register"><AddStaff/></Route>
                    <Route path="/student/register"><AddStudent/></Route>
                    <Route path="/accountant/register"></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
