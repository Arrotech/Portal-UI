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
                });
        };
        getAggregate();
    }, []);
    return (
        <div>
            <p>{aggregate ? Number(aggregate.aggregate).toFixed(2) : 0.00}</p>
        </div>
    )
}

export const Supplementaries = () => {
    const [supplementaries, setSupplementaries] = useState([]);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getSupplementaries = async () => {
            await fetch('http://localhost:5000/api/v1/exams/supplementaries/year/' + admission + '/' + '2014-2015', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const supplementaries = data.data;
                    setSupplementaries(supplementaries)
                    console.log(supplementaries)
                });
        };
        getSupplementaries();
    }, []);
    return (
        <div>
            <p>{supplementaries.count}</p>
        </div>
    )
}

