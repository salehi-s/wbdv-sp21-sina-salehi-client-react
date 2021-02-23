import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from 'react-router-dom'
import courseService, {findAllCourses, deleteCourse} from "../services/course-service"

class CourseManager extends React.Component {
    state = {
        courses: []
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => {
                    if (c._id === course._id) {
                        return course
                    }
                    else {
                        return c
                    }
                })
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never",
            time: "Now"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })
            ))
    }

    deleteCourse = (courseToDelete) => {

        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick = {this.addCourse}>Add Course</button>
                <Route path = "/courses/table">
                    <CourseTable deleteCourse = {this.deleteCourse}
                                 updateCourse = {this.updateCourse}
                                 courses = {this.state.courses}/>
                </Route>
                <Route path = "/courses/grid">
                    <CourseGrid deleteCourse = {this.deleteCourse}
                                courses = {this.state.courses}/>
                </Route>
                <Route path = "/courses/editor"
                       render = {(props) => <CourseEditor props = {props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager