
export class SuperHero {

    name    = '';
    power  = '';
    age    = 0;
    hobbies = [];

    _secretName = '';

    constructor() { }

    get secretName() {
        return this._secretName;
    }

    usePower() {}

    fly() {}

    run() {}

    walk() {}

    revive() {}

}