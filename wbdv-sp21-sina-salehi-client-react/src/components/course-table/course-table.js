import React from 'react'
import CourseRow from "./course-row"
import {Link} from 'react-router-dom'

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Link to = "/courses/grid">
                    <i className = "fas fa-2x fa-th float-right"></i>
                </Link>
                <h2>Course Table</h2>
                <table className = "table">
                    <thead>
                    <tr className="table-primary">
                        <th>Title</th>
                        <th className = "d-none d-md-table-cell">Owned By</th>
                        <th className = "d-none d-lg-table-cell">Date Last Modified</th>
                        <th className = "d-none d-lg-table-cell">Time Last Modified</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map((course, index) =>
                                             <CourseRow
                                                 updateCourse = {this.props.updateCourse}
                                                 deleteCourse = {this.props.deleteCourse}
                                                 key = {index}
                                                 course = {course}
                                                 title = {course.title}
                                                 owner = {course.owner}
                                                 lastModified = {course.lastModified}
                                                 time = {course.time}
                                             />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}