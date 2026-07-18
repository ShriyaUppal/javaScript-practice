//1. Write a class Ingredient with a constructor that takes name and quantity.
//2. Add a method called describe() that logs "<name>: <quantity>" using this.


//3. Convert quantity into a getter/setter pair:
//   - store the real value in _quantity
//   - the getter should return it formatted as a string, e.g. "250g"
//   - the setter should reject negative numbers (log a message, keep the old value)

//4. Create two Ingredient objects and call describe() on both.


//5. Try setting quantity to a negative number on one of them, then log quantity again to confirm the setter blocked it.


//6. Bonus: add a second getter called isLowStock that returns true if _quantity is less than 50.


class Ingredient{
    constructor(name, quantity)
    {
        this.name = name;
        this._quantity = 0;
        this.quantity = quantity;
    }

    describe(){
        console.log(`${this.name} ${this.quantity}`);
    }

    get quantity(){
        return (`${this._quantity}g`); 
    }

    get isLowStock(){
        return this._quantity < 50;
    }

    set quantity(q){
        if(!q || q < 0)
        {
            return console.log('Keep the old values');
        }

        this._quantity = q;
    }
}

const ing1 = new Ingredient('Rajma', 24);
const ing2 = new Ingredient('Sambhar', -1);
const ing3 = new Ingredient('Pasta', 60);

ing1.describe();
ing2.describe();
ing3.describe();

console.log(ing1.isLowStock);   // true (24 < 50)
console.log(ing2.isLowStock);
console.log(ing3.isLowStock);