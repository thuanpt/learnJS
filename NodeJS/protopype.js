function Person(name, password) {
    this.name =  name;
    this.password = password;
}

Person.prototype.getName =  function() {
    return this.name;
}

Person.prototype.getPassword =  function() {
    return this.password;
}

Person.prototype.getLevel = function() {
    return this.level;
}

Person.prototype.level = "admin";

function User(name) {
    this.name = name;
}

User.prototype  = new Person();

var person =  new Person("Ti", "78910");
var user =  new User("Teo", "123456");

console.log(user.getName());
console.log(user.getPassword());
console.log(user.getLevel());
console.log(person.getName());