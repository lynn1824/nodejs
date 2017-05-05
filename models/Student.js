var User = require('./User');
function Student(id, name, age) {
    User.apply(this, arguments);
    this.study = function (res) {
        res.write(`${this.name} 学习!`);
    }
}
module.exports = Student;