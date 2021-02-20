import React, { useState, useEffect } from 'react'
import '../../assets/css/students/Checklist.css'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import axios from 'axios'
import { getToken, getUser } from '../../Utils/Common';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const Checklist = () => {

    const token = getToken()
    const user = getUser()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState('');
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState('');
    const [certificates, setCertificates] = useState([]);
    const [certificate, setCertificate] = useState('');
    const [years, setYears] = useState([]);
    const [year, setYear] = useState('');
    const [campuses, setCampuses] = useState([]);
    const [campus, setCampus] = useState('');
    const [hostels, setHostels] = useState([]);
    const [hostel, setHostel] = useState('');

    const admission = user.admission_no

    useEffect(() => {
        const getDepartments = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/departments', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const departmentData = data.data;
                    const departments = departmentData.map((department) => ({
                        department_id: department.department_id,
                        department_name: department.department_name,
                        created_on: department.created_on
                    }))
                    setDepartments(departments)
                });
        };
        getDepartments();
    }, []);

    useEffect(() => {
        const getCourses = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/courses', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const courseData = data.data;
                    const courses = courseData.map((course) => ({
                        course_id: course.course_id,
                        course_name: course.course_name,
                        department_name: course.department_name
                    }))
                    setCourses(courses)
                });
        };
        getCourses();
    }, []);

    useEffect(() => {
        const getCertificates = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/certificates', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const ccertificateData = data.data;
                    const certificates = ccertificateData.map((certificate) => ({
                        certificate_id: certificate.certificate_id,
                        certificate_name: certificate.certificate_name,
                        created_on: certificate.created_on
                    }))
                    setCertificates(certificates)
                });
        };
        getCertificates();
    }, []);

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


    useEffect(() => {
        const getCampuses = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/campuses', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const campusData = data.data;
                    const campuses = campusData.map((campus) => ({
                        campus_id: campus.campus_id,
                        campus_name: campus.campus_name,
                        campus_location: campus.campus_location,
                        created_on: campus.created_on
                    }))
                    setCampuses(campuses)
                });
        };
        getCampuses();
    }, []);

    useEffect(() => {
        const getHostels = async () => {
            await fetch('https://njc-school-portal.herokuapp.com/api/v1/hostels', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const hostelData = data.data;
                    const hostels = hostelData.map((hostel) => ({
                        hostel_id: hostel.hostel_id,
                        hostel_name: hostel.hostel_name
                    }))
                    setHostels(hostels)
                });
        };
        getHostels();
    }, []);

    const handleFillChecklist = () => {
        setError(null)
        setLoading(true)
        axios.post('https://njc-school-portal.herokuapp.com/api/v1/checklist',
            {
                admission_no: admission,
                department_name: department,
                course_name: course,
                certificate_id: certificate,
                year_id: year,
                campus_id: campus,
                hostel_name: hostel
            },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        ).then(response => {
            setLoading(false)
            setOpen(true);
            setError(response.data.message)

        }).catch(error => {
            setLoading(false)
            setOpen(true);
            if (error.response.data.status != '201') {
                setError(error.response.data.message)
            } else {
                setError("Something went wrong. Please try again later.")
            }
        })

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const onDepartmentChange = async (e) => {
        const selectedDepartment = e.target.value;
        setDepartment(selectedDepartment);
    };

    const onCourseChange = async (e) => {
        const selectedCourse = e.target.value;
        setCourse(selectedCourse);
    };

    const onCertificateChange = async (e) => {
        const selectedCertificate = e.target.value;
        setCertificate(selectedCertificate);
    };

    const onYearChange = async (e) => {
        const selectedYear = e.target.value;
        setYear(selectedYear);
    };

    const onCampusChange = async (e) => {
        const selectedCampus = e.target.value;
        setCampus(selectedCampus);
    };

    const onHostelChange = async (e) => {
        const selectedHostel = e.target.value;
        setHostel(selectedHostel);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert className="signup__snackbar" onClose={handleClose} severity="success">
                    {error && <><small>{error}</small><br /></>}
                </Alert>
            </Snackbar>
            <div className='checklist'>
                <div className="checklist__header">
                    <PlaylistAddCheckIcon className="checklist__headerIcon" />
                    <h3>Fill Checklist</h3>
                </div>
                <div className="checklist__form">

                    <h4>Course Details*</h4>
                    <p>Provide all the related course information.</p>

                    <div className="checklist__courseInfo">

                        <div className="checklist__formGroup">
                            <label>Department*</label>
                            <select onChange={onDepartmentChange} value={department}>
                                <option value="">Select year ---</option>
                                {departments.map((department) => (
                                    <option value={department.department_name}>{department.department_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="checklist__formGroup">
                            <label>Course*</label>
                            <select onChange={onCourseChange} value={course}>
                                <option value="">Select year ---</option>
                                {courses.map((course) => (
                                    <option value={course.course_name}>{course.course_name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="checklist__formGroup">
                            <label>Certificate*</label>
                            <select onChange={onCertificateChange} value={certificate}>
                                <option value="">Select year ---</option>
                                {certificates.map((certificate) => (
                                    <option value={certificate.certificate_id}>{certificate.certificate_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <h4>Other Details*</h4>
                    <p>Provide any other important information.</p>

                    <div className="checklist__otherInfo">

                        <div className="checklist__formGroup">
                            <label>Academic Year*</label>
                            <select onChange={onYearChange} value={year}>
                                <option value="">Select year ---</option>
                                {years.map((year) => (
                                    <option value={year.year_id}>Semester {year.semester} {year.year}</option>
                                ))}
                            </select>
                        </div>

                        <div className="checklist__formGroup">
                            <label>Campus*</label>
                            <select onChange={onCampusChange} value={campus}>
                                <option value="">Select year ---</option>
                                {campuses.map((campus) => (
                                    <option value={campus.campus_id}>{campus.campus_location} {campus.campus_name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="checklist__formGroup">
                            <label>Hostel</label>
                            <select onChange={onHostelChange} value={hostel}>
                                <option value="">Select year ---</option>
                                {hostels.map((hostel) => (
                                    <option value={hostel.hostel_name}>{hostel.hostel_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <hr />

                    <div className="checklist__btn">
                        <div className="checklist__left"></div>
                        <div className="checklist__right">
                            <button className="checklist__btnCancel">Cancel</button>
                            <button className="checklist__btnSave" onClick={handleFillChecklist} disabled={loading}>{loading ? 'Loading...' : 'Save'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

