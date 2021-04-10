import React from 'react'
import {Streams} from '../../components/students/AllStreams'
import '../../assets/css/students/ViewUnits.css'
import BookIcon from '@material-ui/icons/BookmarkBorderOutlined';


export const ViewsAllStreams = () => {
    return (
        <div className="viewUnits">
            <div className="viewUnits__header">
                <BookIcon className="viewResults__headerIcon"/>
                <h3>All Streams</h3>
            </div>
            <Streams/>
        </div>
    )
}
