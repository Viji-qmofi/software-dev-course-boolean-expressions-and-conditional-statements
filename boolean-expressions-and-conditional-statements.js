/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:mo



const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}



Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

console.log("Do you have the torch ?");

if (choice === "mountains" && hasTorch  && hasSword || hasCompass) {
  console.log("You safely navigate through the dark mountains. There could be wild creatures on your way. Make use of the torch");
} 
else if (choice === "mountains" && !hasTorch && hasSword && hasCompass) {
  console.log("It's too dark to proceed. You decide to turn back or be brave to proceed with Sword for safety and compass for direction.");
} 
else if (choice === "village" || !hasMap) {
  console.log("You find your way to the village.");
}
  else if (choice === "village" || !hasCompass && hasSword){
    console.log("Have a safe travel to the village");
} 
else {
  console.log("You get lost and wander aimlessly.");
}

/*if mountain and has torch, ask if he have sword and compass, be awa */