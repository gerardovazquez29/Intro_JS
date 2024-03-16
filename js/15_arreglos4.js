//* Arrays

let employees = ['Gerardo','Melissa','Eduardo'];
let salaries = [1500,2400,3200];


for (let i = 0; i < employees.length; i++) {
    const employed = employees[i];
    const salary = salaries[i];

    console.log(`${employed} Tiene un salario de: ${salary}`);

}

console.log('_____________________________');

let flowers =['Rosa','Girasol','Lirio','Rosa Azul'];

if (flowers[3]) {
    console.log(flowers[3]);
}

console.log('_________________________');

for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i]);
}

