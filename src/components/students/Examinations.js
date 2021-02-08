import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'

export const Aggregate = () => {
    const [aggregate, setAggregate] = useState([]);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getAggregate = async () => {
            await fetch('http://localhost:5000/api/v1/exams/aggregate/' + admission + '/' + '2014-2015', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const aggregate = data.data;
                    setAggregate(aggregate)
                    console.log(aggregate)
                });
        };
        getAggregate();
    }, []);
    return (
        <div>
            <p>{aggregate.aggregate}</p>
        </div>
    )
}
