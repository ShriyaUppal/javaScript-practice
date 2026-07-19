//Create a Student class with a static property college = "ABC University" and print it.
class Student{
    static college = 'JSS Academy Of Technical Education Noida';
}
console.log(Student.college);

//Create a MathUtils class with a static method multiply(a, b).

class MathUtils{
    static multiply(a, b){
        return a * b;
    }
}
console.log(MathUtils.multiply(12, 12));

//Create a BankAccount class with a private field #balance. Add methods deposit() and showBalance().
class BankAccount{
    #balance = 50000;

    deposit(amount){
        this.#balance += amount;
    }

    showBalance(){
        console.log(`Balance is ${this.#balance}`);
    }
}

const obj = new BankAccount();
obj.deposit(10000);
obj.showBalance();

//Create a Person class with a private field #age and a private method #showAge(). Create a public method that calls the private method.

class Person{
    #age = 25;

    #showAge(){
        return this.#age;
    }

    printAge(){
        console.log(`Age is: ${this.#showAge()}`);
    }
}

const p1 = new Person();
p1.printAge();

/*Create an Employee class with:

Static property company = "OpenAI"
Static method companyInfo()
Private field #salary
Public method showSalary()
*/

class Employee{

    static company = "OpenAI";

    static companyInfo(){
        console.log(`Comapny name is: ${Employee.company}`);
    }

    #salary = 50000;
    
    showSalary(){
        console.log(`Salary of employee is: ${this.#salary}`);
    }
}

Employee.companyInfo();
const e1 = new Employee();
e1.showSalary();