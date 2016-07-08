$(function(){
    function Human() {
        this.name = 'Default';
        this.age = 18;
        this.gender = 'male';
        this.height = 185;
        this.weight = 70;
    }

    Worker.prototype = new Human();
    Student.prototype = new Human();

    function Worker(job, salary) {
        this.job = job;
        this.salary = salary;
        this.work = function () {
            console.log('Work');
        }
    }

    function Student(university, scholarship){
        this.university = university;
        this.scholarship = scholarship;
        this.leisure = function() {
            console.log('Watch series');
        }
    }

    var max = new Student('KNEU', 1000);
    max.name = 'Max';
    console.log(max);
    console.log(max.age);
    console.log(max.gender);

    var zoe = new Worker('Google', 20000);
    zoe.name = 'Zoe';
    zoe.age = 21;
    zoe.gender = 'female';
    console.log(zoe);
    console.log(zoe.age);
    console.log(zoe.gender);

});