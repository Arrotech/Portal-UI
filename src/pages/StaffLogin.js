import React, {useState} from 'react'
import '../assets/css/StaffLogin.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { setUserSession } from '../Utils/Common'

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

function StaffLogin() {

    const history = useHistory()
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

    const handleLogin = () => {
        setError(null)
        setLoading(true)
        axios.post('https://njc-school-portal.herokuapp.com/api/v1/staff/login',
            {
                email: email.value,
                password: password.value
            }
        ).then(response => {
            setLoading(false)
            setOpen(true);
            setUserSession(response.data.token, response.data.user)
            history.push('/admin/dashboard')

        }).catch(error => {
            setLoading(false)
            setOpen(true);
            const status = error.response.data.status;
            const message = error.response.data.message;
            console.log(message)
            console.log(status)
            if (status === '400') return setError(message)
            else setError("Something went wrong. Please try again later!")
        })

    }
    return (
        <div className={classes.root}>
            <div className="staffLogin">
                <div className="staffLogin__container">
                    <p className="staffLogin__containerHeader1">Staff Portal</p>
                    <p className="staffLogin__containerHeader2">Login to your account</p>
                    <div className="staffLogin__form">
                        <input type="text" {...email} placeholder="Email" />
                        <input type="password" {...password} placeholder="Password" />
                        <p className="staffLogin__radioBtn"><input type="checkbox" /><span className="staffLogin__checkBoxText">Remember me</span></p>
                        <input className="staffLogin__btn" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
                        <p>Forget Password? <Link className="navBar__rightLinks" to="/reset"><span>Reset</span></Link></p>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert className="login__snackbar" onClose={handleClose} severity="success">
                                {error && <><small>{error}</small><br /></>}
                            </Alert>
                        </Snackbar>
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


export default StaffLogin
