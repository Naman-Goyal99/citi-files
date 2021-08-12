import { Person } from  './person.js';

export class Hero extends Person{
    firstname = "First Name";
    lastname = "Last Name";
    constructor(fname, lname, ncity){
        super(ncity);
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
};