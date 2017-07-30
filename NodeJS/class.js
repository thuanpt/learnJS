//'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
}

var hoa = new Person("Hoa", "Pham");
hoa.sayHello();

var thuan = new Person("Thuan", "Pham");
thuan.sayHello();

console.log(hoa.__proto__);
console.log(thuan.__proto__);
console.log(hoa.__proto__ === thuan.__proto__);