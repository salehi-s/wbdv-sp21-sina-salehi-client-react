import React from 'react'

const CourseRow = ({title, owner, lastModified, time}) =>
    <tr>
        <td>{title}</td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>{time}</td>
        <td>
            <i className = "fas fa-check"></i>
            <i className = "fas fa-trash"></i>
            <i className = "fas fa-edit"></i>
        </td>
    </tr>

export default CourseRow