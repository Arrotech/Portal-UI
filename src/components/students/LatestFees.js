import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'

function LatestFees() {
    const [latest_fee, setFee] = useState(0.00);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getLatestFee = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/fees/latest/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const latest_fee = data.data;
                    setFee(latest_fee)
                });
        };
        getLatestFee();
    }, []);
    return (
        <div>
            <p>{latest_fee ? latest_fee.amount : 0}</p>
        </div>
    )
}

export const FeeDeviation = () => {
    const [balance, setBalance] = useState([0.00]);
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getFeeDeviation = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/fees/balance/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const balance = data.data;
                    setBalance(balance)
                });
        };
        getFeeDeviation();
    }, []);
    return (
        <div>
            <p>{balance ? balance.balance : 0.00}</p>
        </div>
    )
}

export default LatestFees
