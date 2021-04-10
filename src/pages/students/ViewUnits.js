import React from 'react'
import {Units} from '../../components/students/RegisteredUnits'
import '../../assets/css/students/ViewUnits.css'
import BookIcon from '@material-ui/icons/BookmarkBorderOutlined';


export const ViewUnits = () => {
    return (
        <div className="viewUnits">
            <div className="viewUnits__header">
                <BookIcon className="viewResults__headerIcon"/>
                <h3>Registered Units</h3>
            </div>
            <Units/>
        </div>
    )
}
