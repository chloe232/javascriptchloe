let spaceOne = "X"
let spaceTwo = "X"
let spaceThree = "X"
let spaceFour = "X"
let spaceFive= "X"
let spaceSix= " "
let spaceSeven = "O"
let spaceEight = " "
let spaceNine= " "

if (spaceOne == "X" && spaceTwo =="X" && spaceThree =="X"){
    console.log("winner");
}
else if (spaceOne =="O" && spaceTwo =="O" && spaceThree =="O"){
console.log ("WinnerTwo")
}
 else {
    console.log("Loser")
 }

console.log("   |   | ");
console.log(` ${spaceOne} | ${spaceTwo} | ${spaceThree} `);
console.log("   |   | " );
console.log("-----------");
console.log("   |   | ");
console.log(` ${spaceFour} | ${spaceFive} | ${spaceSix}`);
console.log("   |   | ");
console.log("-----------");
console.log("   |   | ");
console.log(` ${spaceSeven} | ${spaceEight} | ${spaceNine} `);
console.log("   |   | ");