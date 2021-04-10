import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'

export const Aggregate = () => {
    const [aggregate, setAggregate] = useState(0.00);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getAggregate = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/exams/aggregate/' + admission, {
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

export const YearAggregate = () => {
    const [aggregate, setAggregate] = useState(0.00);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getAggregate = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/exams/latest/aggregate/' + admission, {
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
            <p>+{aggregate ? Number(aggregate.aggregate).toFixed(2) : 0.00}</p>
        </div>
    )
}


export const Supplementaries = () => {
    const [supplementaries, setSupplementaries] = useState(0);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getSupplementaries = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/exams/supplementaries/year/all/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const supplementaries = data.data;
                    setSupplementaries(supplementaries)
                });
        };
        getSupplementaries();
    }, []);
    return (
        <div>
            <p>{supplementaries ? supplementaries.count : 0}</p>
        </div>
    )
}

export const YearSupplementaries = () => {
    const [supplementaries, setSupplementaries] = useState(0);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getSupplementaries = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/exams/supplementaries/year/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const supplementaries = data.data;
                    setSupplementaries(supplementaries)
                });
        };
        getSupplementaries();
    }, []);
    return (
        <div>
            <p>+{supplementaries ? supplementaries.count : 0}</p>
        </div>
    )
}

