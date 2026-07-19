//Create a Person class and a Student class using inheritance.
class Person{
    constructor(name, age, city)
    {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    printName(){
        console.log(`Your name is ${this.name}`);
    }
};

class Student extends Person{
    constructor(name, age, city, course, marks)
    {
        super(name, age, city);
        this.course = course;
        this.marks = marks;
    }
}

const std = new Student("Shriya",
    23,
    "Noida",
    "B.Tech",
    95);
std.printName();

//Create an Employee class and a Manager class. Override the work() method.
class Employee{
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    printEmployeeName(){
        console.log(`Employee name is ${this.name}`);
    }

    work(){
        console.log(
        `${this.name} manages the Finance department.`
    );
    }
}

class Manager extends Employee{
    constructor(id, name, salary, designation)
    {
        super(id, name, salary);
        this.designation = designation;
    }

    work() {
    super.work();
    console.log(
        `${this.name} also manages the team.`
    );
}
}

const emp1 = new Manager(1, 'xyz', 50000, "Finance Manager");
console.log(emp1.work());

//Create a Vehicle class with a start() method and a Car class that calls super.start() before printing its own message.

class Vehicle{
    constructor(name, avg, company){
        this.name = name;
        this.avg = avg;
        this.company = company;
    }
    start(){
        console.log(`Car started successfully`);
    }
}

class Car extends Vehicle{
    constructor(name, avg, company, type)
    {
        super(name, avg, company);
        this.type = type;
    }

    start(){
        super.start();
        console.log(`Car started`);
    }
}

const car = new Car("BMW",20,"BMW","SUV");
car.start();

//Create a three-level inheritance chain: Animal → Mammal → Dog, and show that the Dog object can use methods from Animal.
class Animal{
    constructor(type){
        this.type = type;
    }
    eat(){
        console.log(`Eating`);
    }
}

class Mammal extends Animal
{
    constructor(type, name){
        super(type);
        this.name = name;
    }
}

class Dog extends Mammal{
    constructor(type, name, food)
    {
        super(type,name);
        this.food = food;
    }
    bark(){
        console.log("Barking");
    }
}

const d1 = new Dog("Pet",
    "Tommy",
    "Bones");
d1.eat();

//Create a BankAccount class and a SavingsAccount class where the child adds an extra property and overrides a method.

class BankAccount{
    constructor(userName, age, accountType, amount){
        this.userName = userName;
        this.age = age;
        this.accountType=accountType;
        this.amount = amount;
    }

    printBalance()
    {
        return (`Amount is: ${this.amount}`);
    }
}

class SavingsAccount extends BankAccount{
    constructor(userName, age, accountType, amount, isCard, depositedAmount){
        super(userName, age, accountType, amount);
        this.isCard = isCard;
        this.depositedAmount = depositedAmount;
    }

    printBalance(depositedAmount){
        return (`Balance is: ${this.depositedAmount + this.amount}`);

    }
}



