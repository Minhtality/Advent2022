//////////////////////////////////////////////////
// Day 1: https://adventofcode.com/2022/day/2 ////
//////////////////////////////////////////////////

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
