import React, { useEffect, useState } from 'react'
import '../../assets/css/students/ViewResults.css'
import BookIcon from '@material-ui/icons/BookmarkBorderOutlined';
import { getUser, getToken } from '../../Utils/Common'

export const ViewResults = () => {

    const [years, setYears] = useState([]);
    const [year, setYear] = useState('worldwide');
    const [exams, setExams] = useState([])
    const user = getUser()
    const token = getToken()

    const admission = user.admission_no

    useEffect(() => {
        const getYears = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/year', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const yearsData = data.data;
                    const years = yearsData.map((year) => ({
                        year_id: year.year_id,
                        semester: year.semester,
                        created_on: year.created_on,
                        year: year.year
                    }))
                    setYears(years)
                });
        };
        getYears();
    }, []);

    const onYearChange = async (e) => {
        const selectedYear = e.target.value;
        setYear(selectedYear);

        const url =
            selectedYear === 'Select Year ---'
                ? `https://njc-school-portal.herokuapp.com/api/v1/exams/year/${admission}/2014-2015`
                : `https://njc-school-portal.herokuapp.com/api/v1/exams/year/${admission}/${selectedYear}`;

        await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                const examsData = data.data;
                const exams = examsData.map((exam) => ({
                    exam_id: exam.exam_id,
                    marks: exam.marks,
                    unit_name: exam.unit_name,
                    unit_code: exam.unit_code,
                    year: exam.year
                }))
                setExams(exams);
            });
    };

    return (
        <div className="viewResults">
            <div className="viewResults__header">
                <BookIcon className="viewResults__headerIcon" />
                <h3>View Results</h3>
            </div>
            <div className="viewResults__header">
                <div className="viewResults__formGroup">
                    <p>View result by academic year</p>
                    <select onChange={onYearChange} value={year}>
                        <option value="">Select year ---</option>
                        {years.map((year) => (
                            <option value={year.year}>Semester {year.semester} {year.year}</option>
                        ))}
                    </select>
                </div>
            </div>
            <table className="viewResults__table">
                <tr>
                    <th>Unit Name</th>
                    <th>Unit Code</th>
                    <th>Marks</th>
                    <th>Evaluation</th>
                </tr>
                {exams.map((exam) => {
                    return (
                        <tr key={exam.exam_id}>
                            <td>{exam.unit_name}</td>
                            <td>{exam.unit_code}</td>
                            <td>{exam.marks}</td>
                            <td>Pass</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}
