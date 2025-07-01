/***********************************************************************
 Name of task: Rob's car rentals
 Name: Reuben Holdsworth
 Date written: 19/06/2025
 Purpose: Part 2 Java Script project
 **********************************************************************/
console.log("Running index.js");
console.log("STUDIO CODE RUNNING");
/*********************************************************************** 
 Varibles
***********************************************************************/
//Values needed for the car rentals
let carNames = ["BAC Mono", "Mazda MX5", "Toyota Yaris", "Mini Cooper", "KIA Sportage", "Mitsubishi Triton", "Mitsubishi Outlander", "KIA Carnival"];
let carSeats = [1, 2, 3, 4, 5, 6, 7, 8];
let carPrices = [100, 120, 130, 140, 150, 160, 170, 180];
//What the program has on offer for the user
let name;
let seatValue;
let daysValue;
let wantsInsurance;
//What the user wants in their rental car
let seatCount;
let rentalDays;
//What the program has found based on what the user needs
let carFound;
let carIndex;
let carName;
let dailyPrice;
let totalCost;
//Errors and rental summary
let errorText;
let summary;
/***********************************************************************
 Main code
***********************************************************************/
function rentNow() {
    userInput();
    //The program making sure the user enters a valid name
    if (name === "" || name === " " || !isNaN(name)) {
        errorText.textContent = "Please enter a valid name.";
        return;
    }
    //The program making sure the user enter a valid number of seats
    if (seatValue === "" || daysValue === "" || Number(daysValue) < 1) {
        errorText.textContent = "Please choose seat amount and valid rental days.";
        return;
    }
    //Changing the values to numbers so that the program doesn't think numbers are strings (words)
    seatCount = Number(seatValue);
    rentalDays = Number(daysValue);
    //Asuming the user hasn't decided what they want yet
    carFound = false;
    carIndex = -1;
    //Going through the arrays to find the users choices
    for (let i = 0; i < carSeats.length; i++) {
        if (carSeats[i] === seatCount) {
            carFound = true;
            carIndex = i;
        }
    }
    userSum();
}
/***********************************************************************
 Functions
***********************************************************************/
function userInput() {
    //THE USERS INPUT INTO THE PROGRAM!!!
    //Users name
    name = document.getElementById("nameInput").value;
    //How many seats the user wants
    seatValue = document.getElementById("seatsDropdown").value;
    //How many days the user would like to rent the car
    daysValue = document.getElementById("daysInput").value;
    //If the user would like to add on insurance on top off their rental
    wantsInsurance = document.getElementById("insuranceCheckbox").checked;
    //If the user makes a mistake/slip in the process of filling out the program
    errorText = document.getElementById("inputError");
    //The summary of the users rental
    summary = document.getElementById("summarySection");
    // Clear any previous messages
    errorText.textContent = "";
    summary.innerHTML = "";
}
function userSum() {
    //Making up the summary for the users rental booking
    summary.innerHTML += "<h2>Rental Summary for " + name + "</h2>";
    summary.innerHTML += "<p>Seats requested: " + seatCount + "</p>";
    summary.innerHTML += "<p>Rental days: " + rentalDays + "</p>";
    //Checking to see if the user wanted insurance added on or not
    if (wantsInsurance === true) {
        summary.innerHTML += "<p>Insurance: Yes ($15)</p>";
    } else {
        summary.innerHTML += "<p>Insurance: No</p>";
    }
    //Doing the math to find out the total cost of the rent
    if (carFound === true) {
        carName = carNames[carIndex];
        dailyPrice = carPrices[carIndex];
        totalCost = dailyPrice * rentalDays;

        if (wantsInsurance === true) {
            totalCost = totalCost + 15;
        }
        //Adding to the summary
        summary.innerHTML += "<p>Car chosen: " + carName + " (" + seatCount + " seats)</p>";
        summary.innerHTML += "<p>Total cost: $" + totalCost + "</p>";
    } else {
        //Setting colour to red and showing error measage
        summary.innerHTML += "<p style='color:red;'>Sorry, we do not have a car with exactly " + seatCount + " seats.</p>";
    }
}