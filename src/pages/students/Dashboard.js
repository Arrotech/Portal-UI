import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/students/DashboardHeader'
import DashboardSummary from '../../components/students/DashboardSummary';
import '../../assets/css/students/Dashboard.css'
import { UnitsRegistration } from './UnitsRegistration';

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/dashboard">
                        <DashboardSummary/>
                    </Route>
                    <Route path="/units-registration"><UnitsRegistration/></Route>
                    <Route path="/fees"></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
