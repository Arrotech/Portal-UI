import React, { useState } from 'react'
import '../../assets/css/admins/AddStudent.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios'
import { getToken } from '../../Utils/Common';

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

function AddAccountant() {
    const token = getToken()
    const firstname = useFormInput('')
    const lastname = useFormInput('')
    const surname = useFormInput('')
    const admission_no = useFormInput('')
    const gender = useFormInput('')
    const email = useFormInput('')
    const password = useFormInput('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSignUp = () => {
        setError(null)
        setLoading(true)
        axios.post('https://njc-school-portal.herokuapp.com/api/v1/accountant/register',
            {
                firstname: firstname.value,
                lastname: lastname.value,
                surname: surname.value,
                admission_no: admission_no.value,
                gender: gender.value,
                email: email.value,
                password: password.value
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
    return (
        <div className={classes.root}>
            <div className="signup">
                <div className="signup__container">
                    <div className="signup__right">
                        <h2>Add New Accountant</h2>
                        <div className="signup__card">
                            <div className="signup__firstname">
                                <input type="text" {...firstname} placeholder="Firstname" />
                            </div>
                            <div className="signup__lastname">
                                <input type="text" {...lastname} placeholder="Lastname" />
                            </div>
                            <div className="signup__phone">
                                <input type="text" {...surname} placeholder="Surname" />
                            </div>
                            <div className="signup__username">
                                <input type="text" {...admission_no} placeholder="Registration Id" />
                            </div>
                            <div className="signup__username">
                                <input type="text" {...gender} placeholder="Gender" />
                            </div>
                            <div className="signup__email">
                                <EmailIcon />
                                <input type="text" {...email} placeholder="Email" />
                            </div>
                            <div className="signup__password">
                                <LockIcon />
                                <input type="password" {...password} placeholder="Password" />
                            </div>
                            <input className="signup__btn" type="button" value={loading ? 'Loading...' : 'Add Accountant'} onClick={handleSignUp} disabled={loading} /><br />
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert className="signup__snackbar" onClose={handleClose} severity="success">
                                    {error && <><small>{error}</small><br /></>}
                                </Alert>
                            </Snackbar>
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

export default AddAccountant
