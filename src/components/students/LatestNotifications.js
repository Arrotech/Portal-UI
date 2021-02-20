import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'

function LatestNotifications() {
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
                        notification_id: notification.id,
                        subject: notification.subject,
                        description: notification.description,
                    }));
                    console.log(notifications)
                    setNotifications(notifications)
                });
        }
        getLatestNotifications();
    }, []);
    return (
        <div>

        </div>
    )
}

export default LatestNotifications
