var mydate = new Date();

console.log(mydate.toLocaleDateString());
console.log(mydate.getFullYear());

var dateString = mydate.toLocaleDateString() + " " + mydate.toLocaleTimeString();
console.log(dateString);