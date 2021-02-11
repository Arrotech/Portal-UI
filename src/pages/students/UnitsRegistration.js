import React from 'react'
import '../../assets/css/students/UnitsRegistration.css'
import BookIcon from '@material-ui/icons/Book';

export const UnitsRegistration = () => {
    return (
        <div className='unitsRegistration'>
            <div className="unitsRegistration__header">
                <BookIcon className="unitsRegistration__headerIcon" />
                <h3>Unit Registration</h3>
            </div>
            <div className="unitsRegistration__form">
                <label>Unit Name*</label>
                <p>Name of the unit you are registering for.</p>
                <input type="text" placeholder="Calculus III" />
                <label>Academic Year*</label>
                <p>Year and semester you are registering for.</p>
                <select name="cars" id="cars" form="carform">
                    <option value="volvo">SEM I 2014-2015</option>
                    <option value="saab">SEM II 2014-2015</option>
                    <option value="opel">SEM III 2014-2015</option>
                    <option value="audi">SEM I 2015-2016</option>
                </select>
                <hr/>
                <div className="unitsRegistration__btn">
                    <div className="unitsRegistration__left"></div>
                    <div className="unitsRegistration__right">
                        <button className="unitsRegistration__btnCancel">Cancel</button>
                        <button className="unitsRegistration__btnSave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
