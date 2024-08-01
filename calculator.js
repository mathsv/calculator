function calculator(){
    const operation = prompt("Enter the operation you want to perform:\n1. Addition (+)\n2. Subtraction (-)\n3. Multiplication (x)\n4. Division (/)\n");
    //console.log(operation)
    
    switch(parseInt(operation)){
        case 1:
            addition();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            division();
            break;
    }
}

function addition(){
    // Get the numbers from the user and parse them to float then add them
    const num1 = prompt("Enter the first number: ");
    const num2 = prompt("Enter the second number: ");
    const result = parseFloat(num1) + parseFloat(num2);
    //console.log("The sum of the numbers is: " + result);
    prompt("The sum of the numbers is: " + result);
}

function subtraction(){
    // Get the numbers from the user and parse them to float then subtract them
    const num1 = prompt("Enter the first number: ");
    const num2 = prompt("Enter the second number: ");
    const result = parseFloat(num1) - parseFloat(num2);
    //console.log("The difference of the numbers is: " + result);
    prompt("The difference of the numbers is: " + result);
}

function multiplication(){
    // Get the numbers from the user and parse them to float then multiply them
    const num1 = prompt("Enter the first number: ");
    const num2 = prompt("Enter the second number: ");
    const result = parseFloat(num1) * parseFloat(num2);
    //console.log("The product of the numbers is: " + result);
    prompt("The product of the numbers is: " + result);
}

function division(){
    // Get the numbers from the user and parse them to float then divide them
    const num1 = prompt("Enter the first number: ");
    const num2 = prompt("Enter the second number: ");
    const result = parseFloat(num1) / parseFloat(num2);
    //console.log("The division of the numbers is: " + result);
    prompt("The division of the numbers is: " + result);
}

function newOperation(){
    let option = prompt("Do you want to perform another operation? (yes/no): ");
    if(option === "yes"){
        calculator();
    } else if(option === "no"){
        prompt("Thank you for using the calculator!");
    } else {
        prompt("Invalid option! Please enter 'yes' or 'no'");
        newOperation();
    }
}

calculator();
newOperation();