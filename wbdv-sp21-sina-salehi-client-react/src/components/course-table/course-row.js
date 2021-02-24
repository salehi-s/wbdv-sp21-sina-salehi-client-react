import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CourseRow = (
    {
        title,
        owner,
        lastModified,
        time,
        deleteCourse,
        updateCourse,
        course
    }
) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (<tr>
                <td>
                    {
                        !editing &&
                        <Link to = "/courses/editor">
                            {title}
                        </Link>
                    }
                    {
                        editing &&
                        <input onChange = {(event) => setNewTitle(event.target.value)}
                               value = {newTitle}
                               className = "form-control"/>
                    }
                </td>
                <td className = "d-none d-md-table-cell">{owner}</td>
                <td className = "d-none d-lg-table-cell">{lastModified}</td>
                <td className = "d-none d-lg-table-cell">{time}</td>
                <td>
                    <i onClick = {() => deleteCourse(course)}
                       className = "fas fa-trash"></i>
                    {!editing && <i onClick = {() => setEditing(true)}
                        className = "fas fa-edit"></i>}
                    {editing && <i onClick={() => saveTitle()}
                        className="fas fa-check"></i>}
                </td>
            </tr>)
}

export default CourseRow