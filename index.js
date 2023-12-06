// Write a JS function to check wether an "input" is an array or not
function is_Array(tab) {
  if (Array.isArray(tab)) {
    return true;
  } else {
    return false;
  }
}
let myResult = is_Array([12, 13]);
// console.log(myResult);
// Write a JS function to get the first element of an array
function firstElement(tab) {
  return tab[0];
}
let index0 = firstElement([12, 13]);
// console.log(index0);
// Write a JS function to get the last element of an array
function lastElement(tab) {
  let index = tab.length - 1;
  return tab[index];
}
let lastElementOfAnArray = lastElement([12, 13]);
// console.log(lastElementOfAnArray);
// Write a simple JS programm to join all elements of the array into a string
let myColor = ["red", "green", "white", "black"];
let myColorInString = myColor.join(",");
// console.log(myColorInString);
// Write a JS programm that accepts a number as input and inserts dashes(-)
// between even each number
let numbers = [0, 254, 6, 8];
let Numbers = numbers.join("-");
// console.log(Numbers);
// Write a JS program to sort the items of the array
let array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
let array2 = array.sort((a, b) => a - b);
// console.log(array2);
// Write a JS program to find the most frequent element in an array
let myArray = [3, "a", "a", "a", 2, 3, "a", 2, 3, "a", 2, 4, 9, 3];
let element = [];
for (i = 0; i < myArray.length; i++) {
  element = myArray.filter((e) => e === myArray[i]);
  //   console.log(element);
}
//
// console.log(element);
// Write a JS function to compute the sum and product of an array of integers
let anArray = [12, 67, 87, 34];
function sumOfInt() {
  let ind = 0;
  let product = 1;
  for (i = 0; i < anArray.length; i++) {
    ind += anArray[i];
    product *= anArray[i];
  }
  //   console.log(ind);
  //   console.log(product);
}
sumOfInt();
// Write a JS programm to find the leap years in a given range of years
// function leapYears(year) {
//   for (i = 0; i < year.length; i++) {
//     if (year[i] % 4 === 0) {
//       return year[i] + "leap year";
//     } else {
//       return "not a leap year";
//     }
//   }
// }
// let test = leapYears([2001, 2002, 2016]);
// console.log(test);
let leapYears = [2001, 2002, 2008, 2016];
let years = leapYears.filter((p) => p % 4 === 0);
// console.log(years + " leap year");
// Write a JS program to compute the sum of each individual index value in the given array
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
function computeSum() {
  for (i = 0; i < arr1.length; i++) {
    for (i = 0; i < arr2.length; i++) {
      //   console.log(arr1[i] + arr2[i]);
    }
  }
}
computeSum();
// Write a JS program to compute the union of two arrays
// 1 2 3 10 100
// let tab1 = [1, 2, 3];
// let tab2 = [100, 2, 1, 10];
// let tab3 = [];

// for (i = 0; i < tab1.length; i++) {
//   for (i = 0; i < tab2.length; i++) {
//     if (tab1[i] !== tab2[i]) {
//       tab3 = tab2[i];
//     }
//   }
// }
// console.log(tab3);
// Write a JS program that take an array with mixed data type and calculates the sum of all numbers
let tab1 = [2, 3, 0, 5, 7, 8, true, false];
let tab2 = tab1.filter((n) => typeof n === "number");
let tab3 = tab2.reduce((x, y) => x + y);
// console.log(tab3);
// Write a JS function to generate an array of integer numbers, increasing one from
// the starting position of a specified length
// let tab4 = [2, 6];
// let j = 0;
// while (j < tab4[tab4.length - 1]) {
//   //   console.log(tab4[0]++);
//   j++;
// }
// Afficher en console tous les multiples de 10 jusqu'à 1000
for (i = 1; i < 101; i++) {
  //   console.log(i * 10);
}
// Afficher sur la page html la table de 5

// for (i = 1; i < 11; i++) {

//   //   div.innerHTML += `${i} * 5 = ${i * 5}`;
// }
// Ecrire un script qui utilise le script suivant:
// for (i = 1; i < 5; i++) {
//   console.log(i++);
//   console.log(i + 1);
// }
// Ecrire un script qui s'incrémente de 2 et l'afficher dans le HTML
let incr = document.getElementById("incr");
let start = 0;
// while (start < 20) {
//   //   incr.innerHTML += start += 2;
// }
// //
// PROUD OF MYSELF
let ul = document.getElementById("ul");
let table = 10;
for (x = 0; x < table; x++) {
  let test = Math.floor(Math.random() * 11);
  if (test == 10) {
    // console.log("10 fait partie du tirage");
  }
  //   ul.innerHTML += `<li>${Math.floor(Math.random() * 11)}</li>`;
}
let body = document.querySelector("body");
let colors = ["red", "blue", "yellow", "purple", "aqua", "orange"];
for (i = 0; i < colors.length; i++) {
  let random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];
}
