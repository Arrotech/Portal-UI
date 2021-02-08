import React, { useEffect, useState } from 'react'
import { getToken } from '../../Utils/Common';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import '../../assets/css/admins/GetStudents.css'

function GetStudents() {
    const [students, setStudents] = useState([]);
    const token = getToken()

    useEffect(() => {
        const getStudents = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/staff/users', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const studentsData = data.data;
                    const students = studentsData.map((student) => ({
                        user_id: student.user_id,
                        firstname: student.firstname,
                        lastname: student.lastname,
                        surname: student.surname,
                        admission_no: student.admission_no,
                        gender: student.gender,
                        email: student.email,
                    }));
                    setStudents(students);
                    console.log(students);
                });
        };
        getStudents();
    }, []);

    return (
        <div className="studentsTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Surname</th>
                        <th>Registration No.</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {(students.length > 0) ? students.map((student, index) => {
                        return (
                            <tr key={index}>
                                <td>{student.user_id}</td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.surname}</td>
                                <td>{student.admission_no}</td>
                                <td>{student.gender}</td>
                                <td>{student.email}</td>
                                <td><DeleteIcon className="studentsTable__deleteIcon"/></td>
                                <td><EditIcon className="studentsTable__editIcon"/></td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5">Loading...</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default GetStudents
