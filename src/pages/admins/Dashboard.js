import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/admins/DashboardHeader'
import '../../assets/css/admins/Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/admin/dashboard">
                        <h1>Admin Dashboard</h1>
                    </Route>
                    <Route path="/student/register"></Route>
                    <Route path="/accountant/register"></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
