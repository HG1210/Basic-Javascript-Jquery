// alert("Creole Studios");
document.write("<i><b>1) Variable declared using const,var & let</i></b>");
const name1 = "Harsh Gandhi";
const name2 = "Creole Studios";
document.write("<br>");
document.write(name1, name2);
document.write("<br>");
//const name1 ="Movies"; Can't be define
//Using const we cant re-define and re-assign the variable value

var n1 = "Computer";
var n2 = "Internship";
document.write(n1, "\n", n2, "\n");
document.write("<br>");
//var n1="Series"; Can be define
//Using var we can easily re-define and re-assign the variable value

let c1 = "Developer";
let c2 = "Coder";
document.write(c1, "\n", c2, "\n");
document.write("<br>");
//c1="Movies & Series"; Possible
//let c1="React Js"; Not possible
//Using let we cant re-define the variable value

var series = ["Friends", "HIMYM", "Lucifer"];
series[0] = "Wednesday";
document.write(series, "\n");
document.write("<br>");
document.write(
  "This will print the following element in the list:-",
  "\n",
  series[1]
);
document.write("<br>");
series.push("Stranger Things");
document.write(series, "\n");
document.write("<br>");

document.write("<i><b>2) Operators</i></b>");
const x = 5;
const y = 10;
const z = x + y;
document.write("<br>");
document.write("The Following Addition will be:-", z);
document.write("<br>");

let a = 15;
let b = 10;
let c = a - b;
a = 25;
document.write("The Following Subtraction will be:-", c);
document.write("<br>");

var x1 = 10;
var x2 = (10 * 20) / x1;
document.write("The Final Answer will be:-", x2);
document.write("<br>");

let name = "Harsh";
let name3 = "Gandhi";
document.write("With the help of Operator:-", name + " " + name3);
document.write("<br>");

let x3 = "Hobby";
x3 += " Music";
document.write("We are using assignment operator:-", x3);
document.write("<br>");

let x5 = 4;
document.write(x5++);
document.write("<br>");
let x6 = 10;
document.write(--x6);
document.write("<br>");

document.write("<i> <b> 3) Quote Operation </i> </b>");
document.write("<br>");
let v1 = "   It's Your First Day";
let v2 = " 'Coding Skills'matters";
let v3 = '  Intership At "Creole Studio"';
document.write(v1, "\n", v2, "\n", v3, "\n");
document.write("<br>");

document.write("<i><b>4) Join Operation</i></b>");
document.write("<br>");
const cars = ["BMW", "Toyota", "Ford"];
document.write(cars.join("*"));
document.write("<br>");
document.write(cars.join("-"));
document.write("<br>");
cars.push("Nissan");
document.write("The will Add a new item in list", cars);
document.write("<br>");
cars.pop();
document.write("This will pop out an element in list", cars); // Top most element will get pop out
document.write("<br>");

document.write("<i><b>5) Substring (indexstart, indexend)</i></b>");
const st2 = "Creole";
document.write(st2.substring(1, 3));
document.write("<br>");

document.write("<i><b>6) Replace String will be</i></b>");
const str1 = "Creole Studios";
document.write("<br>");
document.write("The Following string will be replaced:", str1);
document.write("<br>");

const str2 = str1.replace("Studios", "Intern");
document.write("The replaced String will be:-", str2);
document.write("<br>");

document.write(
  "<i><b>7) The Entire String will be replaces we are using /g</i></b>"
);
const str5 = "Please join Creole Studios And Creole Studios";
document.write("Will replace the 'Creole Studios':-", str5);
document.write("<br>");
const str6 = str5.replace(/Creole Studios/g, "Creole");
document.write("The Replaced String will be:-", str6);
document.write("<br>");

document.write("<i><b>8) Uppercase</i></b>");
const str8 = str1.toUpperCase();
document.write("<br>");
document.write("Will change the String into Uppercase:-", str8);
document.write("<br>");

document.write("<i><b>9) concat</i></b>");
const str9 = str1.concat(" ", str5);
document.write("<br>");
document.write("The following string will be combined:-", str9);
document.write("<br>");

document.write(
  "<i><b>10) trim (Will remove whitespace from both ends)</i></b>"
);
var str10 = "     Harsh Gandhi      ";
document.write("<br>");
document.write("Orginal Statement length will be:-", str10.length);
document.write("<br>");
var str11 = str10.trim();
document.write(
  "WhiteSpace removed from both ends and the length will be:-",
  str11,
  "\n",
  str11.length
);
document.write("<br>");

document.write("<i><b>11) Search Methods </i></b>");
//indexof
let text = "Life At Creole Studios 'At' ";
document.write("<br>");
document.write(text.indexOf("At"));
//lastindexof
document.write("<br>");
document.write(text.lastIndexOf("At"));
document.write("<br>");

document.write("<i><b>12) Numbers</i></b>");
var st4 = 10;
var st5 = 12;
document.write("Add two input:-", st4 + st5);
document.write("<br>");
var st6 = "10";
var st7 = "12";
document.write("Concat two input:-", st6 + st7);
document.write("<br>");
document.write("This will add & concat:-", st4 + st5 + st6);
document.write("<br>");

document.write("<i><b> 13) Numbers 'BigInt</i></b>'");
//BigInt cannot have decimals
document.write("<br>");
let num = BigInt(10000);
let num1 = "20000";
document.write("This will show the datatype used:-", typeof num);
document.write("<br>");
document.write("This will show the datatype used:-", typeof num1);
document.write("<br>");

// We have two types of integer Max & Min
let num3 = Number.MAX_SAFE_INTEGER;
document.write("Max integer Size:-", num3);
document.write("<br>");
let num4 = Number.MIN_SAFE_INTEGER;
document.write("Minimum Integer Size:-", num4);
document.write("<br>");

// We have 2 Methods isInteger & isSafeInteger
let num5 = Number.isSafeInteger(25236892);
document.write("IsSafeInteger or Not :-", num5);
let num6 = Number.isSafeInteger(90000150369871036685);
document.write("<br>");
document.write("isSafeInteger or Not:-", num6);
document.write("<br>");

//The Number cant be floating point
let num8 = Number.isInteger(20);
let num7 = Number.isInteger(10.5);
document.write("IsInteger or Not:-", num8);
document.write("<br>");
document.write("Isinteger or Not:-", num7);

// Max value And Min value
let num9 = Number.MAX_VALUE;
document.write("The Max_Value used in Javascript", num9);
document.write("<br>");
let num10 = Number.MIN_VALUE;
document.write("The Min_Value used in Javascript", num10);
document.write("<br>");

// var co1=[];
// for(var v=0; v<=4; v++)
// {
//   co1[v]=prompt("Enter the values:-",co1);
// }
// co1[2]='282';
// document.write("The final value:-", co1);

let text1 = " ";
for (let k1 = 0; k1 < 10; k1++) {
  text1 += "<br> The number is <br>" + k1;
}
document.write(text1);
document.write("<br>");

let t3 = "good morning";
for (let t4 in t3) {
  document.write(t3);
}
document.write("<br>");
let l1 = {
  name: "Harsh",
  surname: "Gandhi",
  mark: 80,
};
for (let l2 in l1) {
  document.write(l1[l2]);
  document.write("<br>");
}

let p1 = [];
let size = 3;
for (let i = 0; i < size; i++) {

  p1[i] = prompt("enter value...");
}
document.write(p1);
