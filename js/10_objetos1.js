//* Object

let person = {
    name: 'Juan',
    age: 30,
    isActive: true,
    hobbies: ['soccer','baseball'],

    toString() {
        const ObjectString = this.name + ' ' + this.age + ' ' + this.hobbies.join(',');
        return ObjectString;
    }
} 
console.log(person.toString());



let car = {
    doors: 5,
    brand: 'Honda',
    color: 'White',
    year: 2025,
    gearBox: 'manual'
}

let smartTv = {
    sizeInches: 90,
    brand: 'Samsung',
    year: 2015,
    type: 'Led'
}

let youtubeVideo = {
    length: 3600,
    author: 'Fernando Herrera',
    comments: ['Buen video','Me gustó mucho','El peor video de todos'],
    likes: 1500,
    dislikes: 100,
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);