/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

// globaler Sichtbarkeitsbereich
// globaler Kontext

var a = 123123; // Variable im aktuellen Scope
let b; // Variable im aktuellen Block
const API_KEY = '123123'; // Konstante

API_KEY = 123;

console.log(this);
function app() {
    //asdf
    console.log('asdf');
    test = 2; // globale Variable
    console.log(this.test);
}

window.app();
this.app();
app();

console.log(test);
console.log(this.test);
console.log(window.test);

{
    let temp = 234;
}

console.log(temp);

