/*
Task 1: Write a constructor function Student with properties name, age, course, and a method introduce() (assigned via this.introduce = function() {...}) that logs "Hi, I'm <name>, age <age>, studying <course>". Create 2 instances using new with different data and log both. 
*/

function Student(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;

    this.introduce = function introduce(){
        console.log(`Hi, I'm ${this.name}, age ${this.age} studying ${this.course}`);
    }
}

const std1 = new Student("Rahul", 24, "B.Tech");
const std2 = new Student("Neha", 22, "BCA");

std1.introduce();
std2.introduce();


/*
Task 2: Write a constructor function Car with properties brand, model, year. Add a method getAge() that calculates and returns 2026 - year. Create 1 instance and log the result of calling getAge(). 
*/

function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function(){
        return 2026 - this.year;
    }
}

const Thar = new Car("Mahindra", "2*2", 2024);
console.log(Thar.getAge());


//Task 3 (the important gotcha): Create 2 instances of Student and check if they're equal:
const s1 = new Student("A", 20, "CS");
const s2 = new Student("A", 20, "CS");
console.log(s1 === s2); // what do you think this prints? why?
