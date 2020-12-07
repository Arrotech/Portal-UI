import React from 'react'
import '../../assets/css/students/NotificationsTable.css'

function NotificationsTable() {
    return (
        <div className="notificationsTable">
            <table className="notificationsTable__table">
                <tr>
                    <th>Sender</th>
                    <th>Message</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td className="notificationsTable__sender">Exam Office</td>
                    <td>Results are now available...</td>
                    <td className="notificationsTable__status">UNREAD</td>
                </tr>
                <tr>
                    <td className="notificationsTable__sender">Registrar</td>
                    <td>You can now collect your id...</td>
                    <td className="notificationsTable__status">UNREAD</td>
                </tr>
                <tr>
                    <td className="notificationsTable__sender">Lecturer Griffin</td>
                    <td>Projects should be submitted by end of...</td>
                    <td>READ</td>
                </tr>
            </table>
        </div>
    )
}

export default NotificationsTable
