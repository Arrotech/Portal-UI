import React, { useState, useEffect } from 'react'
import '../../assets/css/students/UnitsRegistration.css'
import BookIcon from '@material-ui/icons/Book';
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

export const UnitsRegistration = () => {
    const token = getToken()
    const user = getUser()
    const unit_name = useFormInput('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [years, setYears] = useState([]);
    const [year, setYear] = useState('');

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleRegisterUnit = () => {
        setError(null)
        setLoading(true)
        axios.post('https://njc-school-portal.herokuapp.com/api/v1/subjects',
            {
                admission_no: admission,
                unit_name: unit_name.value,
                year_id: year
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

    const onYearChange = async (e) => {
        const selectedYear = e.target.value;
        setYear(selectedYear);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert className="signup__snackbar" onClose={handleClose} severity="success">
                    {error && <><small>{error}</small><br /></>}
                </Alert>
            </Snackbar>
            <div className='unitsRegistration'>
                <div className="unitsRegistration__header">
                    <BookIcon className="unitsRegistration__headerIcon" />
                    <h3>Unit Registration</h3>
                </div>
                <div className="unitsRegistration__form">
                    <label>Unit Name*</label>
                    <p>Name of the unit you are registering for.</p>
                    <input type="text" {...unit_name} placeholder="Calculus III" />
                    <label>Academic Year*</label>
                    <p>Year and semester you are registering for.</p>
                    <select onChange={onYearChange} value={year}>
                        <option value="">Select year ---</option>
                        {years.map((year) => (
                            <option value={year.year_id}>Semester {year.semester} {year.year}</option>
                        ))}
                    </select>
                    <hr />
                    <div className="unitsRegistration__btn">
                        <div className="unitsRegistration__left"></div>
                        <div className="unitsRegistration__right">
                            <button className="unitsRegistration__btnCancel">Cancel</button>
                            <button className="unitsRegistration__btnSave" onClick={handleRegisterUnit} disabled={loading}>{loading ? 'Loading...' : 'Save'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

