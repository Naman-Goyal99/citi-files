"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// composition
function Component(config) {
    return function (targetClass) {
        var tc = new targetClass();
        return /** @class */ (function () {
            function class_1() {
                this.title = tc.title;
                this.view = config.template;
                this.dom = config.selector;
                this.power = tc.power;
            }
            return class_1;
        }());
    };
}
;
var Hero = /** @class */ (function () {
    function Hero() {
        this.title = "Bruce";
        this.power = 7;
    }
    Hero = __decorate([
        Component({
            selector: 'app-root',
            template: "<h1> Hero Application {{ title }}</h1>\n                <h2> Power is : {{ power }} <h2>"
        })
    ], Hero);
    return Hero;
}());
var hero = new Hero();
onload = function () {
    var temp = hero.view.replace("{{ title }}", hero.title).replace("{{ power }}", hero.power);
    // document.getElementsByTagName(hero.dom)[0].innerHTML = hero.view+"<h2> Power is : "+hero.power+"<h2>";
    document.getElementsByTagName(hero.dom)[0].innerHTML = temp;
};
