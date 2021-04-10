import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/students/DashboardHeader'
import DashboardSummary from '../../components/students/DashboardSummary';
import '../../assets/css/students/Dashboard.css'
import { UnitsRegistration } from './UnitsRegistration';
import { Checklist } from './Checklist';
import { ViewResults } from './ViewResults';
import { FeeStatement } from './FeeStatement';
import { Profile } from './Profile';
import { ViewUnits } from './ViewUnits';
import { ViewsAllStreams } from './ViewStreams';

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/dashboard">
                        <DashboardSummary />
                    </Route>
                    <Route path="/view-results"><ViewResults /></Route>
                    <Route path="/fee-statement"><FeeStatement /></Route>
                    <Route path="/view-units"><ViewUnits /></Route>
                    <Route path="/view-streams"><ViewsAllStreams /></Route>
                    <Route path="/units-registration"><UnitsRegistration /></Route>
                    <Route path="/checklist"><Checklist /></Route>
                    <Route path="/profile"><Profile /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
