#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome To Naeem Ahmed - Cli Number Guessing Game\n");

let randomNumber = Math.floor(Math.random() * 5 + 1);

let answer = await inquirer.prompt(
    [
        {
            name:"userGuestNumber",
            type:"number",
            message:"Enter Your Guess a Number(Number Limit from 1 to 5):",

        }
    ]
);
if(answer.userGuestNumber === randomNumber){
    console.log("Congratulation ! You Guess a Correct Number.")

}
else{
    console.log("Sorry, You Guess a Wrong Number");
}