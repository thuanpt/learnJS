var person = {
    firstname: 'Thuan',
    lastname: 'Pham',
    sayHello:  function () {
        console.log("Hello," + this.firstname + " " + this.lastname);
    }
}

person.sayHello();
console.log(person.firstname);
console.log(person['lastname']);