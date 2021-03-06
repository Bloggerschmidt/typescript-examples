/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
var a = 2;
multiplicate(); // lokale var a ist danach zerstört
multiplicate2();
console.log(a);
function multiplicate() {
    console.log(a);
    var a = 'text'; // Achtung: Hoisting
    console.log(a);
}
function multiplicate2() {
    var a;
    console.log(a);
    a = 'text';
    console.log(a);
}
// ------------------------------
function shop() {
    var basket = []; // private var
    // anonyme function
    // Referenz nach außen
    return function (item) {
        basket.push(item);
        return basket.slice();
    };
}
var addItem = shop();
var basket = addItem('Brot');
addItem('Milch');
addItem('Butter');
addItem('Käse');
console.log(basket);
// ------------------------------
// immediately invoked function expression
// iife
(function (global) {
    'use strict';
    var abc = 1;
    console.log(global);
}(this));
//console.log(abc);
//# sourceMappingURL=main.js.map