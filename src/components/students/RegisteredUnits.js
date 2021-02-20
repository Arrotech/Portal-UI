import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'

export const TotalRegisteredUnits = () => {
    const [totalUnits, setTotalUnits] = useState([]);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getTotalRegisteredUnits = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/subjects/total/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const totalUnits = data.data;
                    setTotalUnits(totalUnits)
                });
        };
        getTotalRegisteredUnits();
    }, []);
    return (
        <div>
            <p>{totalUnits.count}</p>
        </div>
    )
}
