import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'
import '../../assets/css/students/FeeStatement.css'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { FeeDeviation } from '../../components/students/LatestFees'

export const FeeStatement = () => {
    const [feeStatement, setFeeStatement] = useState([]);
    const user = getUser()
    const token = getToken()
    const feeDeviation = FeeDeviation()

    const admission = user.admission_no

    useEffect(() => {
        const getFeeStatement = async () => {
            await fetch('http://localhost:5000/api/v1/fees/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const feestatement = data.data;
                    const feeStatement = feestatement.map((statement) => ({
                        fee_id: statement.fee_id,
                        amount: statement.amount,
                        created_on: statement.created_on,
                        description: statement.description,
                        expected_amount: statement.expected_amount,
                        transaction_no: statement.transaction_no,
                        transaction_type: statement.transaction_type

                    }))
                    setFeeStatement(feeStatement)
                });
        };
        getFeeStatement();
    }, []);
    return (
        <div className="feeStatement">

            <div className="feeStatement__header">
                <CreditCardIcon className="feeStatement__headerIcon" />
                <h3>Fee Statement</h3>
            </div>
            <table className="feeStatement__table">
                <tr>
                    <th>Description</th>
                    <th>Transaction No.</th>
                    <th>Transaction Type </th>
                    <th>Amount</th>
                </tr>
                {feeStatement.map((statement) => {
                    return (
                        <tr key={statement.fee_id}>
                            <td>{statement.description}</td>
                            <td>{statement.transaction_no}</td>
                            <td>{statement.transaction_type}</td>
                            <td>{statement.amount}</td>
                        </tr>
                    );
                })}
            </table>

            <div className="feeStatement__balance">
                <div className="feeStatement__balanceLeft">
                </div>
                <div className="feeStatement__balanceRight">
                    <p>Balance</p>
                    <h4>{feeDeviation}</h4>
                </div>
            </div>

        </div>
    )
}
