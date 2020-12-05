import React from 'react'
import '../../assets/css/students/SidebarOption.css'

function SidebarOption({Icon, title}) {
    return (
        <div className="sidebarOption">
            <Icon className="sidebarOption__icon" />
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption
