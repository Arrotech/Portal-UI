import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/accountants/DashboardHeader'
import '../../assets/css/accountants/Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/finance-dashboard">
                        <h1>Accountant Dashboard</h1>
                    </Route>
                    <Route path="/add-fees"></Route>
                    <Route path="/update-fees"></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
