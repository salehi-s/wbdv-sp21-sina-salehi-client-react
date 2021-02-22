import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never",
            time: "Now"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <button onClick = {this.addCourse}>Add Course</button>
                <table className = "table">
                    <tbody>
                        {
                            this.props.courses.map((course, index) =>
                                             <CourseRow
                                                 key = {index}
                                                 title = {course.title}
                                                 owner = {course.owner}
                                                 lastModified = {course.lastModified}
                                                 time = {course.time}
                                             />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}