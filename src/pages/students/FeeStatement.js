import React from 'react'
import '../../assets/css/students/FeeStatement.css'
import CreditCardIcon from '@material-ui/icons/CreditCard';

export const FeeStatement = () => {
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
                <tr>
                    <td>HELB Semester I 2014-2015</td>
                    <td>AJVSFKVUFONEFB</td>
                    <td>HELB</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>KCB DEPOSIT Semester I 2014-2015</td>
                    <td>LFDBSJNBDCPJHG</td>
                    <td>Laptop Fees</td>
                    <td>56500</td>
                </tr>
                <tr>
                    <td>EQUITY DEPOSIT Semester II 2014-2015</td>
                    <td>WDCJWCWHGWCKJWJ</td>
                    <td>Tuition Fees</td>
                    <td>26400</td>
                </tr>
                <tr>
                    <td>HELB Semester II 2014-2015</td>
                    <td>CBWTOLCVDSOBDCID</td>
                    <td>HELB</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>HELB Semester III 2014-2015</td>
                    <td>GFCDXPMSFVSISKBC</td>
                    <td>HELB</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>EQUITY DEPOSIT Semester III 2014-2015</td>
                    <td>DJBJCSABWINFCKLS</td>
                    <td>Tuition Fees</td>
                    <td>26400</td>
                </tr>
                <tr>
                    <td>HELB Semester I 2015-2016</td>
                    <td>QHCOCMFCSXOKCBDOH</td>
                    <td>HELB</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>BARCLAYS DEPOSIT Semester I 2015-2016</td>
                    <td>GHCGSONCPSNCGSCBN</td>
                    <td>Tuition Fees</td>
                    <td>26400</td>
                </tr>
                <tr>
                    <td>HELB Semester II 2015-2016</td>
                    <td>JFCVDINVPVCBDJIND</td>
                    <td>HELB</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>EQUITY CHEQUE Semester II 2015-2016</td>
                    <td>CWEKVVMGWVBNCVNGV</td>
                    <td>Tution Fees</td>
                    <td>23450</td>
                </tr>
                <tr>
                    <td>HELB Semester III 2015-2016</td>
                    <td>FWRkCLNWFNMVOLBVC</td>
                    <td>HELB</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>KCB DEPOSIT Semester III 2015-2016</td>
                    <td>CGFWLMVYKNWVGKWBJ</td>
                    <td>Tution Fees</td>
                    <td>24500</td>
                </tr>
            </table>
            <div className="feeStatement__balance">
                <div className="feeStatement__balanceLeft">
                </div>
                <div className="feeStatement__balanceRight">
                    <p>Balance</p>
                    <h4>-250</h4>
                </div>
            </div>
        </div>
    )
}
