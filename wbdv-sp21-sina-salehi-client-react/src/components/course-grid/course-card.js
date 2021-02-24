import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course}) =>
    <div className = "col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className = "card">
            <div className = "card-body">
                <h5 className = "card-title">{course.title}</h5>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/3/39/Book.svg" className = "card-img-top" alt = "Card Image"></img>
                <p className = "card-text">Owned By: {course.owner}</p>
                <p className = "card-text">Date Last Modified: {course.lastModified}</p>
                <p className = "card-text">Time Last Modified: {course.time}</p>
                <Link to = "/courses/editor" className = "btn btn-primary">
                    Go to {course.title}
                </Link>
                <i className = "fas fa-trash"></i>
            </div>
        </div>
    </div>

export default CourseCard