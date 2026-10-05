let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();
fruits.unshift("grape");
console.log(fruits);

let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
console.log([includesResult, firstIndex, lastIndex]);

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");
console.log(allTeams);

let numbers =;
let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);
console.log(middleNumbers);
console.log(numbers);

let scores =;
scores.sort();
scores.reverse();
console.log(scores);
