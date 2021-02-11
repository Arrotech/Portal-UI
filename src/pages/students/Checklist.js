import React from 'react'
import '../../assets/css/students/Checklist.css'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

export const Checklist = () => {
    return (
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
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Mathematics</option>
                            <option value="saab">Phyisical Sciences</option>
                            <option value="opel">Health</option>
                            <option value="audi">ICT</option>
                        </select>
                    </div>
                    <div className="checklist__formGroup">
                        <label>Course*</label>
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Maths and Comp Sci</option>
                            <option value="saab">Medicine and Surgery</option>
                            <option value="opel">Animal Health</option>
                            <option value="audi">Electrial Engineering</option>
                        </select>
                    </div>

                    <div className="checklist__formGroup">
                        <label>Certificate*</label>
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Certificate</option>
                            <option value="saab">Diploma</option>
                            <option value="opel">Degree</option>
                            <option value="audi">Masters</option>
                            <option value="audi">PHD</option>
                        </select>
                    </div>
                </div>

                <h4>Other Details*</h4>
                <p>Provide any other important information.</p>

                <div className="checklist__otherInfo">

                    <div className="checklist__formGroup">
                        <label>Academic Year*</label>
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">SEM I 2014-2015</option>
                            <option value="saab">SEM II 2014-2015</option>
                            <option value="opel">SEM III 2014-2015</option>
                            <option value="audi">SEM I 2015-2016</option>
                        </select>
                    </div>

                    <div className="checklist__formGroup">
                        <label>Campus*</label>
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Main</option>
                            <option value="saab">Town</option>
                        </select>
                    </div>

                    <div className="checklist__formGroup">
                        <label>Hostel</label>
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Nyati</option>
                            <option value="saab">Leopeard</option>
                            <option value="opel">Hall Six</option>
                        </select>
                    </div>
                </div>
                <hr />

                <div className="checklist__btn">
                    <div className="checklist__left"></div>
                    <div className="checklist__right">
                        <button className="checklist__btnCancel">Cancel</button>
                        <button className="checklist__btnSave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

