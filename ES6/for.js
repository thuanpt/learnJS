var todoAraay = ['Lap Trinh', 'Choi bong', 'Choi game'];

// for

for (var i = 0; i < todoAraay.length; i++) {
    console.log(todoAraay[i]);
}

// for in

for (var key in todoAraay) {
    console.log(key + ": " + todoAraay[key]);
}

//for of

for (var todo of todoAraay) {
    console.log(todo);
}