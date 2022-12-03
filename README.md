# Advent2022
My advent of code for 2022

## Day 1
```javascript
const fs = require("fs");
const data = fs.readFileSync("day1/input_day1", "utf8").trimEnd();

// part 1
const sortByCal = data
	// data is separated by two spaces \n\n. We first split the data string into comma separated array
	.split("\n\n")
	// each item in the array JSON is one elf, we also want to filter the extra \n from the number array
	.map((elf) => elf.split("\n").reduce((acc, curr) => acc + parseInt(curr), 0))
	// "9195\n5496\n2732\n8364\n3703\n3199\n7177\n1659" --> ["9195","5496","2732","8364","3703","3199","7177","1659"]. Then we reduce the array value and then sort
	.sort((a, b) => b - a);

console.log(sortByCal[0]); //69281

// part 2: find out the top 3 most cal elfs
// Since our answer is alreadt sorted from most to least, we would want the 0 1 and 2 index sum together
console.log(sortByCal[0] + sortByCal[1] + sortByCal[2]); //201524
```

## Day 2
A little hacky with the hashmap, mostly using mental calculation and could be more automated in term of win conditions

```javascript
const fs = require("fs");
const data = fs.readFileSync("day2/input_day2", "utf8").trimEnd();

// A = Rock  	1p	X = Rock
// B = Paper	2p	Y = Paper
// C = Scissor	3p	Z = Scissor

// My win conditions: A Y(8), B Z(9), C X(7) 6p
// My loss condition: A Z(3), B X(1), C Y(2) 0p
// Tie A X(4), B Y(5), C Z(6)
const map = {
	"A X": 4,
	"A Y": 8,
	"A Z": 3,
	"B X": 1,
	"B Y": 5,
	"B Z": 9,
	"C X": 7,
	"C Y": 2,
	"C Z": 6,
};

// Part 2 Conditions: 	
//	Y is to draw 
//	X to to lose 
//	Z is to win
const map2 = {
	"A X": 3, // lose = 0 + 3 point to play Z
	"A Y": 4, // draw = 3 + 1 point to play X
	"A Z": 8, // win = 6 + 2 points to play Y
	"B X": 1,
	"B Y": 5,
	"B Z": 9,
	"C X": 2,
	"C Y": 6,
	"C Z": 7,
};

console.log(data.split("\n").reduce((acc, curr) => acc + map2[curr], 0));

```
