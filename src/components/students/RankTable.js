import React from 'react'
import '../../assets/css/students/RankTable.css'

function RankTable() {
    return (
        <div className="rankTable">
            <table className="rankTable__table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>Lois</td>
                    <td>Griffin</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>Joe</td>
                    <td>Swanson</td>
                    <td>76</td>
                </tr>
                <tr>
                    <td>Harun</td>
                    <td>Gachanja</td>
                    <td>72</td>
                </tr>
                <tr>
                    <td>Mercy</td>
                    <td>Wairimu</td>
                    <td>74</td>
                </tr>
                <tr>
                    <td>Kevin</td>
                    <td>Njoroge</td>
                    <td>63</td>
                </tr>
                <tr>
                    <td>Samuel</td>
                    <td>Njoroge</td>
                    <td>61</td>
                </tr>
                <tr>
                    <td>Mariam</td>
                    <td>Achieng'</td>
                    <td>59</td>
                </tr>
            </table>
        </div>
    )
}

export default RankTable
