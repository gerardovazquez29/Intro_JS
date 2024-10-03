//*
//*    Objetivo:
//*        Ver rápidamente las definiciones de la clase
//*        También funciona con archivos HTML y otros
//*
//*    Tips:
//*        ⌘ P => luego escribir la @
//*        ⇧ ⌘ O
//*
//*        Ctrl + P => luego escribir la @
//*        Ctrl + Shift = O
//*
//*        Se pueden agrupar si después de la @, se escriben :
//*


class SuperHero {

    name  = '';
    power = '';
    age   = 0;
    hobbies= [];

    // tslint:disable-next-line:variable-name
    _secretName = '';

    constructor() { }

    usePower() {}

    fly() {}

    run() {}

    walk() {}

    revive() {}

    // Sólo para demostración

    name2 = '';

    power2 = '';

    age2 = 0;

    hobbies2 = [];

    set secretName(value ) {
        this._secretName = value;
    }

    get secretName() {
        return this._secretName;
    }
}
