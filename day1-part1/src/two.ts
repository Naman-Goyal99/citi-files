interface IPerson{
    sayCity():string;
    canWalk():string;
} 
//-------------------------
class Person implements IPerson{
    /*     
    private city;
    constructor(rcity:string){
        this.city = rcity;
    } */    
    constructor(private city:string){}
    sayCity(){
        return "I am from "+this.city;
    }
    canWalk(){
        return "I can Walk";
    }
}

let person = new Person("Gotham");

console.log(person.sayCity());