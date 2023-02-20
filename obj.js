alert("Intern At Creole Studios");

//Javascript is all about objects
//There are total 3 ways to create obj
//1) Literals



const person={
    firstname:"Harsh",
    lastname:" Gandhi",
    age:' 21',
    Intern:"Creole Studios",
    fullName: function(){ //Using this keyword 
        return this.firstname+this.lastname+this.age;
    }
};
document.write(person.fullName());
document.write("<br>");
document.write(person.firstname+ person.lastname+" is working at "+person.Intern+"..");
document.write("<br>");

//By creating new obj
const joinee= new Object();
joinee.id=' 7017';
joinee.name=" Harsh Gandhi";
joinee.Intern=" CS";
document.write("The "+joinee.id+joinee.name+" is working at "+joinee.Intern+"..");
document.write("<br>");

let x=this;
document.write(x);
document.write("<br>");

//Adding new elements in obj
const cars={
    name:" Harsh Gandhi",
    own1:" BMW",
    own2:" Ford"
};
document.write(cars.name+cars.own1);
document.write("<br>");
cars.area=" Dubai";
document.write("The updated list will also display the area:-",cars.own1+cars.area);
document.write("<br>");
delete cars.own1;
document.write("The deleted list will also display the area:-",cars.own1+cars.area);


const ob12={
    firstname:" Harsh",
    lastname:" Gandhi",
    age:' 21',
    Intern:" Creole Studios",
    cars: "Range Rover",
    fullName:function(){
        return (this.firstname+this.lastname).toUpperCase();
    }
    
};
document.write("My name is: "+ob12.fullName()+"& working at"+ob12.Intern.toUpperCase());
document.write("<br>");

//Javascript obj converted into array
const bike={
    owner:" Creole Studios",

        name1:"Ducati",
        name2:"BMW",
        name3:"Ninja",
        age:25,
    
};
document.write("List of bikes:-",bike.owner+bike.name1);
document.write("<br>");
const b1=Object.values(bike);
document.write("Javascript object will be into array values:-",b1);
document.write("<br>");
//Javascript Object converted into string
const b3=JSON.stringify(bike);
document.write("Javascript Obj will be converted into String:-",b3);
document.write("<br>");

//Using Gettter and Setter
const hg={
    firstname: "Harsh GAndhi",

    get getname(){
        return this.firstname;

    }
};
document.write("Using Getter:-",hg.getname);
document.write("<br>");
const ch={

    firstname:"Harsh Gandhi",
    set modifyname(newname){
        this.firstname=newname;
    }
};
document.write("-------------------------------------------");
document.write("<br>");
document.write("Using Setter:-",ch.firstname);
document.write("<br>");
ch.modifyname="Intern";
document.write("The modified name:-",ch.firstname);
document.write("<br>");
document.write("-------------------------------------------<br>");