//1. An object student with properties: name, age, course, and a method introduce() that logs "Hi, I'm <name> and I'm studying <course>" using this.

const student = {
    name: "Shreya",
    age: 25,
    course: "B.Tech",
    introduce: function (){
        console.log(`Hi, I'm ${this.name} and I'm studying ${this.course}`);
    },
};

//2. Access name using dot notation and course using bracket notation.
console.log(student.name);
console.log(student['course']);

//3. Add a new property college after the object is created.
student.college = "JSSATEN";

//4. Delete the age property.
delete(student.age);
console.log(student);

//5. Loop through the object using for...in and print each key-value pair.
for(let key in student){
    console.log(key, ":", student[key]);
}

//6. Write one arrow function version of introduce() as introduceArrow and log the output — deliberately trigger the undefined bug again, so you see it in a fresh example (not copy-pasted from earlier).

student.introduceArrow = () =>{
    console.log(`Hi, I'm ${this.name} and I'm studying ${this.course}`);
};

student.introduceArrow();