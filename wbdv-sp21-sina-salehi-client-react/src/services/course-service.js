/*
Function CourseService() is used to initialize a new course service variable
*/

function CourseService() {
    this.createCourse = createCourse
    this.findAllCourses = findAllCourses
    this.findCourseById = findCourseById
    this.updateCourse = updateCourse
    this.deleteCourse = deleteCourse
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/salehi.s/courses' // Server URL
    var self = this

    // Send a new course to the server

    function createCourse(course) {
        return fetch(self.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(function (response) {
            return response.json()
        })
    }

    // Find all existing courses in the server

    function findAllCourses() {
        return fetch(self.url).then(function (response) {
            return response.json()
        })
    }

    // Find a specific course according to that course's ID

    function findCourseById(id) {
        return fetch(`${self.url}/${id}`).then(function (response) {
            return response.json()
        })
    }

    // Update the attributes of an existing course in the server

    function updateCourse(id, course) {
        return fetch(`${self.url}/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    // Remove an existing course from the server

    function deleteCourse(id) {
        return fetch(`${self.url}/${id}`, {method: 'DELETE'})
    }
}