//////////////////////////////////////////////////
// Day 1: https://adventofcode.com/2022/day/1 ////
//////////////////////////////////////////////////

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

//////////////////////////////////////////////////
// Day 1: END////
//////////////////////////////////////////////////
