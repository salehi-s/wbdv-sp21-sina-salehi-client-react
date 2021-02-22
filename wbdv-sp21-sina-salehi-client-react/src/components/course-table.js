import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    state = {
        courses: [
            {
                title: "CS5610 (Web Development)",
                owner: "Me",
                lastModified: "January 1, 2021",
                time: "1:00 P.M."
            },
            {
                title: "DS5110 (Introduction to Data Management and Processing)",
                owner: "Me",
                lastModified: "January 14, 2021",
                time: "7:00 P.M."
            },
            {
                title: "CS5200 (Database Management Systems)",
                owner: "Me",
                lastModified: "January 21, 2021",
                time: "12:00 P.M."
            },
            {
                title: "CS5800 (Algorithms)",
                owner: "Me",
                lastModified: "February 2, 2021",
                time: "12:30 A.M."
            }
        ]
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
                            this.state.courses.map((course, index) =>
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