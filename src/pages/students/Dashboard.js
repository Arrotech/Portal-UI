import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/students/DashboardHeader'
import DashboardSummary from '../../components/students/DashboardSummary';
import '../../assets/css/students/Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/student/dashboard">
                        <DashboardSummary/>
                    </Route>
                    <Route path="/examinations"></Route>
                    <Route path="/fees"></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
