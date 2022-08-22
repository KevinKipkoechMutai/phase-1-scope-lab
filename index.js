// Write your solution in this file!
//customerName declaration
var customerName = "bob";

//function to access the global variable and uppercase it
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

//bestCustomer declaration

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

//overwriteBestCustomer
function overwriteBestCustomer() {
    return bestCustomer = "maybe bob";
}

//leastFavoriteCustomer
const leastFavoriteCustomer = "james";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "jimmy";
}