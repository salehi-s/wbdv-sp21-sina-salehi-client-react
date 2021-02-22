import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {
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
    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <CourseTable courses = {this.state.courses}/>
                <CourseGrid courses = {this.state.courses}/>
                <CourseEditor/>
            </div>
        )
    }
}

export default CourseManager