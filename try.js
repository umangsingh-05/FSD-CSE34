// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const p1 = new Person('John', 30);
// console.log(p1);


const Person = {
    name: 'dove',
    age: 0,
    'job type': 'developer'
};
Person.name = 'umang';
//console.log(Person);          cannot use dot notation for property names with spaces
Person['job type'] = 'developer';
console.log(Person);