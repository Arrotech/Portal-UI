import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHeader from '../../components/students/DashboardHeader'

function Dashboard() {
    return (
        <div className="dashboard">
            <Router>
                <DashboardHeader />
                <Switch>
                    <Route path="/dashboard"></Route>
                    <Route path="/examinations"></Route>
                    <Route path="/fees"></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Dashboard
