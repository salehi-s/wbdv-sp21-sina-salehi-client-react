import React from 'react'

export default class CourseTable
    extends React.Component {
    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <table className = "table">
                    <tbody>
                        <tr>
                            <td>CS5610 (Web Development)</td>
                            <td>Me</td>
                            <td>January 1, 2021</td>
                            <td>1:00 P.M.</td>
                            <td>
                                <i className = "fas fa-check"></i>
                                <i className = "fas fa-trash"></i>
                                <i className = "fas fa-edit"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>DS5110 (Introduction to Data Management and Processing)</td>
                            <td>Me</td>
                            <td>January 14, 2021</td>
                            <td>7:00 P.M.</td>
                            <td>
                                <i className = "fas fa-check"></i>
                                <i className = "fas fa-trash"></i>
                                <i className = "fas fa-edit"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}