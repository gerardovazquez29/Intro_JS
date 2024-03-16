//* Arrays-Objets

let Gerardo = {
    age: 42,
    isActive: true,
    name: 'Gerardo',
};

let Melissa = {
    age: 30,
    isActive: false,
    name: 'Melissa',
};

let Juan = {
    age: 40,
    isActive: true,
    name: 'Juan',
};

 people = [ Gerardo, Melissa, Juan];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(person.name + ' ' + person.age);
}

