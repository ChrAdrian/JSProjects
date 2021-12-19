let person = {
    name: 'Adrian',
    age: 29
};
person.age = 25;
let selection = 'name';
person[selection] = 'Cristina';
console.log(person);

let selected_colors = ['red', 'blue'];
selected_colors[2] = 1;
console.log(selected_colors.length);

function greet(nume) {
    console.log('Hello ' + nume)
}

function square(number) {
    return number*number;
}

console.log(square(4));
greet('Adi');