"use strict";
//-------------------------
var Person = /** @class */ (function () {
    /*
    private city;
    constructor(rcity:string){
        this.city = rcity;
    } */
    function Person(city) {
        this.city = city;
    }
    Person.prototype.sayCity = function () {
        return "I am from " + this.city;
    };
    Person.prototype.canWalk = function () {
        return "I can Walk";
    };
    return Person;
}());
var person = new Person("Gotham");
console.log(person.sayCity());
