function func01(name, age) {
    return ` my name is ${name}, ${age} year old`;
}

var func02 =  function(name, age) {
    return ` my name is ${name}, ${age} year old`;
}

var func03 = (name, age) => {
    return ` my name is ${name}, ${age} year old`;
}

var func04 = (name, age) =>  ` my name is ${name}, ${age} year old`;

var func05 = name => {
    return ` my name is ${name}`;
}

var func06 = () => {
    return ` My name is Thuan`;
}

console.log(func01("thuan", 22));
