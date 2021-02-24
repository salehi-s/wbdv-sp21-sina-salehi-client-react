import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
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

    addCourse = (course) => {
        courseService.createCourse(course)
            .then(c => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        c
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
                <div className = "container-fluid">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className = "collapse navbar-collapse" id = "navbarNav">
                            <ul className = "navbar-nav">
                                <li className = "nav-item">
                                    <h1>Course Manager</h1>
                                </li>
                                <li className = "nav-item">
                                    <input className = "form-control wbdv-field-add-course"></input>
                                </li>
                                <li className = "nav-item">
                                    <i onClick = {this.addCourse}
                                       className = "fas fa-3x fa-plus-circle float-right"></i>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className = "container-fluid">
                    <Route path = {["/courses/table", ""]}>
                        <CourseTable deleteCourse = {this.deleteCourse}
                                     updateCourse = {this.updateCourse}
                                     courses = {this.state.courses}/>
                    </Route>
                </div>
                <div className = "container-fluid">
                    <Route path = "/courses/grid">
                        <CourseGrid deleteCourse = {this.deleteCourse}
                                    courses = {this.state.courses}/>
                    </Route>
                </div>
                <div className = "container-fluid">
                    <Route path = "/courses/editor"
                           render = {(props) => <CourseEditor props = {props}/>}>
                    </Route>
                </div>
            </div>
        )
    }
}

export default CourseManager