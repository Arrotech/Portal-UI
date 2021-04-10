import React, { useEffect, useState } from 'react'
import '../../assets/css/students/NotificationsTable.css'
import { getUser, getToken } from '../../Utils/Common'

function NotificationsTable() {
    const [notifications, setNotifications] = useState([]);
    const user = getUser()
    const token = getToken()

    useEffect(() => {
        const getLatestNotifications = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/notifications/latest', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const latestNotifications = data.data;
                    const notifications = latestNotifications.map((notification) => ({
                        notification_id: notification.notification_id,
                        subject: notification.subject,
                        description: notification.description,
                        is_read: notification.is_read,
                    }));
                    setNotifications(notifications)
                });
        }
        getLatestNotifications();
    }, []);

    return (
        <div className="notificationsTable">

            <table className="notificationsTable__table">
                <tr>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
                {notifications.map((notification) => {
                    return (
                        <tr key={notification.notification_id}>
                            <td className="notificationsTable__sender">{notification.subject}</td>
                            <td className="notificationsTable__description-">{notification.description}</td>
                            <td className="notificationsTable__status">{notification.is_read}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default NotificationsTable
