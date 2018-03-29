// ///////////////////////////////////////////////////////
// PART 1
// Account information:
"use strict";

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set("home", "510-867-5309");
phoneNumbers.set("mobile", "415-555-1212");
phoneNumbers.set("business", "415-123-4567");

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printInfo(accountHolder, accountNumber, businessName) {
    console.log(`Account Holder Name: ${accountHolder}`);
    console.log(`Account Num: ${accountNumber}`);
    console.log(`Business Name: ${businessName}`);
}


// Add function to print all addresses, including a header
function showAddresses(addresses) {
    console.log("Addresses:");
    for(let address of addresses){
        console.log(`${address}`);
    }
}

// Add function to print phone types and numbers

function showPhoneNums(phoneNumbers) {
    console.log("Phone Numbers:");
    for(let num of phoneNumbers){
        console.log(`${num[0]}: ${num[1]}`);
    }
}
// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTrans(date, amount) {
    transactions.set(date, amount);
}

// Use the function to add transactions
addTrans('May-2', -500);
addTrans('May-13',+1200);
addTrans('May-15', -100);
addTrans('May-21', -359);
addTrans('May-29', +2200);
// Add function to show balance status
function showBalance(balance){
    console.log("Balance:" balance);
    if (balance<0){
        console.log("YOU ARE OVERDRAWN");
    }else if (balance<20 && balance>0){
        console.log("Warning: You are close to zero balance");
    }else{
        console.log("Thank you for your business!");
    }
}

// Add function to show transactions
function showTransactions(transactions, balance){
    console.log(`Starting Balance: ${balance}`);
    for(let transaction in transactions){
        console.log(`Daaaaaate: ${transaction[0]} 
            Type: ${transaction.slice(0,1)} Amount: ${transaction[1]}`);
    }
    endingBalance=balance + transaction[1];
    console.log(`${endingBalance}`);
    showBalance(endingBalance);
    if (endingBalance < 0) {
        endingBalance = endingBalance - 25;
    }
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




