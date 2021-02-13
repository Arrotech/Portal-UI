import React from 'react'
import '../../assets/css/students/ViewResults.css'
import BookIcon from '@material-ui/icons/BookmarkBorderOutlined';

export const ViewResults = () => {
    return (
        <div className="viewResults">
            <div className="viewResults__header">
                <BookIcon className="viewResults__headerIcon" />
                <h3>View Results</h3>
            </div>
            <div className="viewResults__header">
                <div className="viewResults__formGroup">
                    <p>View result by academic year</p>
                    <select name="cars" id="cars" form="carform">
                        <option value="volvo">SEM I 2014-2015</option>
                        <option value="saab">SEM II 2014-2015</option>
                        <option value="opel">SEM III 2014-2015</option>
                    </select>
                </div>
            </div>
            <table className="viewResults__table">
                <tr>
                    <th>Unit Name</th>
                    <th>Points</th>
                    <th>Grade</th>
                    <th>Evaluation</th>
                </tr>
                <tr>
                    <td>Calculus I</td>
                    <td>77</td>
                    <td>A</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Permutations & Combinations</td>
                    <td>77</td>
                    <td>A</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Chemical Bonding I</td>
                    <td>76</td>
                    <td>A</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Electricity & Magnetism I</td>
                    <td>72</td>
                    <td>A</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Introduction to Programming</td>
                    <td>74</td>
                    <td>A</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Object Oriented Programming I</td>
                    <td>63</td>
                    <td>B</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Mechanics I</td>
                    <td>61</td>
                    <td>B</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Discrete Mathematics</td>
                    <td>59</td>
                    <td>C</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>Communication Skills</td>
                    <td>49</td>
                    <td>D</td>
                    <td>Supplementary</td>
                </tr>
            </table>
        </div>
    )
}
