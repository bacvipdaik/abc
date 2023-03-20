
var coursesApi = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourse);
    handleCreateForm();
}

start();

function getCourses(cb) {
    fetch(coursesApi)
        .then(response => {
            return response.json();
        })
        .then(cb);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    fetch(coursesApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback)
}

function renderCourse(courses){
    var listCourseBlock = 
        document.querySelector('#list-courses')
    var htmls = courses.map(course => {
        return `
            <li class ="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="deleteCourse(${course.id})">Xóa</button>
            </li>
        `
    });
    listCourseBlock.innerHTML = htmls.join('');
}

function deleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(coursesApi + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(function(){
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            }
        })
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.getElementById('name').value;
        var description = document.getElementById('description').value;

        var formData = {
            name: name,
            description: description,
        };
        createCourse(formData, function(){
            getCourses(renderCourse);
        })

    }
}