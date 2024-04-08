import inquirer from "inquirer";

import chalk from "chalk";

console.log (chalk.blue.bold("\t\nWELCOME TO MALIHA HAROON CURRENCY CONVERTER\n"));

// define the list of currencies and their exchange rates

let currency : any = {
  "USD" : 1.00,
  "EUR" : 0.92,
  "GBP" : 0.79,
  "JPY" : 151.86,
  "CHY" : 7.23,
  "SAR" : 3.75,
  "KWD" : 0.31,
  "PKR" : 278.00
}

// promt the user toselect currencies to connvert from and to

let answer = await inquirer.prompt ([
  {
    name : "from",
    type : "list",
    message : "select the currency to convert from",
    choices : [ "USD", "EUR","GBP", "JPY","CHY","SAR","KWD","PKR"]

},

{
  name : "to",
  type : "list",
  message : "select the currency to convert",
  choices : [ "USD", "EUR","GBP", "JPY","CHY","SAR","KWD","PKR"]

},
{
  name : "amount",
  type : "number",
  message : "enter the amount to convert",
}
]);

//perform currency conversion by using formula

let from_amount= currency[answer.from];

let to_amount = currency[answer.to];

let amount= answer.amount

//formula of conversion

let base_amount = amount/from_amount;
let converted_amount = base_amount* to_amount;

//display the converted amount 

console.log(chalk.green(converted_amount));

