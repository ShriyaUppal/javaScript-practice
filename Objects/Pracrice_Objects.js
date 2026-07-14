/*const user = {
    "full name": "shriya uppal",
};

console.log(user["full name"]);
console.log(user.full name);

const obj2 = {
    name: "Shriya",
    age: 25
};

let key = "name";

console.log(typeof obj2.key);
console.log(typeof obj2[key]);
*/

const obj = {
    name: "Shreya",
    greeting: function(){
        console.log(`Hello from ${this.name}`);
    },
    getArrow: () =>{
        console.log(this.name);
    },
};

obj.greeting();
obj.getArrow();