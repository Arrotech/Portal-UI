import React from 'react'
import InfoBoxOption from '../InfoBoxOption'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import '../../assets/css/students/DashboardSummary.css'
import RankTable from './RankTable';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import NotificationsTable from './NotificationsTable';
import LatestFees from './LatestFees'
import { FeeDeviation } from './LatestFees'
import { Aggregate, Supplementaries, YearAggregate, YearSupplementaries } from './Examinations'
import { TotalRegisteredUnits, YearRegisteredUnits } from './RegisteredUnits'

function DashboardSummary() {
    const feeDeviation = FeeDeviation()
    const totalUnits = TotalRegisteredUnits()
    const aggregate = Aggregate()
    const yearAggregate = YearAggregate()
    const supplementaries = Supplementaries()
    const yearSupplementaries = YearSupplementaries()
    const yearUnits = YearRegisteredUnits()
    return (
        <div className="dashboard__summary">
            <div className="dashboardSummary__right">
                <div className="dashboardSummary__firstRow">
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="GPA"
                        Icon={MenuBookIcon}
                        value={aggregate}
                        deviation={yearAggregate}
                        text="Since last semester" />
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="FEE"
                        Icon={MonetizationOnIcon}
                        value={<LatestFees />}
                        deviation={feeDeviation}
                        text="Fee balance" />
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="REGISTERED UNITS"
                        Icon={LibraryBooksIcon}
                        value={totalUnits}
                        deviation={yearUnits}
                        text="Since last semester" />
                    <InfoBoxOption className="dashboardSummary__infoBox"
                        title="SUPPLEMENTARIES"
                        Icon={SmsFailedIcon}
                        value={supplementaries}
                        deviation={yearSupplementaries}
                        text="Since last semester" />
                </div>
                <div className="dashboardSummary__secondRow">
                    <div className="dashboardSummary__table">
                        <h1>Overall Ranking</h1>
                        <RankTable/>
                    </div>
                    <div className="dashboardSummary__graph">
                        <h1>Overall Exams Score</h1>
                        <LineGraph />
                    </div>
                </div>
                <div className="dashboardSummary__thirdRow">
                    <div className="dashboardSummary__notifications">
                        <p>Latest Notifications</p>
                        <NotificationsTable />
                    </div>
                    <div className="dashboardSummary__doughnut">
                        <DoughnutGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSummary
