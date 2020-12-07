import React from 'react'
import '../assets/css/InfoBoxOption.css'

function InfoBoxOption({ title, Icon, value, deviation, text }) {
    return (
        <div className="infoBoxOption">
            <div className="infoBoxOption__header">
                <p>{title}</p>
                <Icon />
            </div>
            <div className="infoBoxOption__value">
                {value}
            </div>
            <div className="infoBoxOption__summary">
                <p className="infoBoxOption__deviation">{deviation}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default InfoBoxOption
