let m1 = new Map([
  ["1", "Harsh Gandhi"],
  ["2", "CS"],
]);
for (i of m1) {
  document.write("<br>", i);
}

document.write("<br><b>Scope </b>");
let car = "BMW";
function myworld() {
  car = "Range Rover";
}
document.write("<br>", car);
myworld();
document.write("<br>", car);

let v2 = "@|HG|";
function callMe() {
  let v3 = "Intern";
  document.write("<br>", v2 + v3);
}
document.write("<br>", v2); //Outside Function
callMe(); //Inside Function

//Ternary Operators"
let marks = prompt("Enter the Numbers:-");
let result = marks >= 40 ? "Pass" : "Fail";
document.write("<br>Ternary Operator:-", result);

//Maps
const map1 = new Map();
map1.set("Harsh", "Intern");
map1.set("7017", "HG");
document.write("<br>Before Using Clear Method:-", map1.size);
map1.clear();
document.write("<br>After using Clear Method:-", map1.size);

//Delete & has
const map = new Map();
map.set("Harsh", "HG");
document.write("<br>", map.delete("Harsh"));
document.write("<br>", map.has("Harsh"));

//set
const map2 = new Map();
map.set("Harsh", "HG");
document.write("<br>", map.get("Harsh"));

//Screen
document.write("<br>Display the Screen_Heights:-", screen.height);
document.write("<br>Display the Screen_availWidth:-", screen.availWidth);
document.write("<br>Display the  Color Depth:-", screen.colorDepth);

//window.loaction
document.write("<br>Window Location href:-", window.location.href);
document.write("<br>Window Location hostname:-", window.location.hostname);
document.write("<br>Window Location protocol:-", window.location.protocol);

//History Back
function goback() {
  window.history.back();
}

//Focus & blur
function getFocus() {
  document.getElementById("Email").focus();
}

function loseFocus() {
  document.getElementById("Email").blur();
}

//Async function
// async function Display() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("@|Harsh Gandhi|@");}, 3000);
//     });
//     async function Display1() {
//     let myPromise1 = new Promise(function(resolve) {
//         setTimeout(function() {resolve("@|Intern At CS|@");}, 5000);
//       });
//     document.write("<br>In 3sec:-",await myPromise);
//     document.write("<br>In 5sec:-",await myPromise1);
//   }
//   Display1();
// }
// Display();

// Shift and unshift
let first=["Harsh","Gandhi","Creole"];
first.unshift("HG,");
document.write("<br> Will add the elements at the beginning:- ",first);
let language=first.shift();
document.write("<br>Will remove the first element at the beginning:- ",language);

//reverse
let v1=['1','2','3'];
let reversedarray=v1.reverse();
document.write("<br>Reversed Array:- ",reversedarray);

//from methods
let arr1=Array.from("@|Harsh Gandhi|@");
document.write("<br>",arr1);

//values
let v10=[];
for(var i=0;i<3;i++){
    v10[i]=prompt("Enter the values:-");
}
let v11=v10.values();
for(let v12 of v11){
document.write("<br>",v12);
}