import React from 'react'
import InfoBoxOption from '../InfoBoxOption'
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';
import '../../assets/css/admins/DashboardSummary.css'

function DashboardSummary() {
    return (
        <div className="dashboard__summary">
            <div className="dashboardSummary__left">

            </div>
            <div className="dashboardSummary__right">
                <div className="dashboardSummary__firstRow">
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="STUDENTS"
                        Icon={SchoolIcon}
                        value="44,345"
                        deviation="+7,224"
                        text="Since last year" />
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="STAFF"
                        Icon={PeopleIcon}
                        value="8,221"
                        deviation="+16"
                        text="Since last year" />
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="ACCOUNTANTS"
                        Icon={PeopleIcon}
                        value="12"
                        deviation="+2"
                        text="Since last year" />
                </div>
                <div className="dashboardSummary__secondRow">

                </div>
                <div className="dashboardSummary__thirdRow">

                </div>
            </div>
        </div>
    )
}

export default DashboardSummary
