var http = require('http');
// var Teacher = require('./models/Teacher');
var Student = require('./models/Student');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html',});
    if(request.url !== '/favicon.ico') {
        // var teacher = new Teacher(1, 'jason', 29);
        // teacher.enter();
        // teacher.teach(response);
        var student = new Student(1, 'jason', 29);
        student.enter();
        student.study(response);
        response.end('');
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');