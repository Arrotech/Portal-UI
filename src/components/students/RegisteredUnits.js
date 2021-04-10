import React, { useState, useEffect } from 'react'
import { getUser, getToken } from '../../Utils/Common'
import '../../assets/css/students/Units.css'

export const TotalRegisteredUnits = () => {
    const [totalUnits, setTotalUnits] = useState(0);
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
            <p>{totalUnits ? totalUnits.count : 0}</p>
        </div>
    )
}

export const YearRegisteredUnits = () => {
    const [totalUnits, setTotalUnits] = useState(0);
    const user = getUser()
    const token = getToken()
    const admission = user.admission_no

    useEffect(() => {
        const getTotalRegisteredUnits = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/subjects/total/year/' + admission, {
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
            <p>+{totalUnits ? totalUnits.count : 0}</p>
        </div>
    )
}

export const Units = () => {
    const [units, setUnits] = useState([]);
    const user = getUser()
    const token = getToken()
    const admission = user.admission_no

    useEffect(() => {
        const getUnits = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/subjects/' + admission, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            }).then((response) => response.json())
                .then((data) => {
                    const unitsData = data.data;
                    const units = unitsData.map((unit) => ({
                        unit_id: unit.unit_id,
                        unit_code: unit.unit_code,
                        unit_name: unit.unit_name,
                    }))
                    setUnits(units)
                    console.log(units);
                })
        }
        getUnits();
    }, [])
    return (
        <table className="units__table">
            <tr>
                <th>Unit Code</th>
                <th>Unit Name</th>
                <th></th>
            </tr>
            {units.map((unit) => {
                return (
                    <tr key={unit.unit_code}>
                        <td>{unit.unit_code}</td>
                        <td>{unit.unit_name}</td>
                    </tr>
                )
            })}
        </table>
    )
}
