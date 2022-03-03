/*
upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.

overwriteBestCustomer(): See the consequences of declaring a variable in global scope, 
by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.

leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant (using the const keyword) in global scope 
called leastFavoriteCustomer; be sure to assign it some initial value. 
Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant - 
notice what JavaScript does when you try to change the constant.
*/

var customerName = 'bob'
var bestCustomer;

function upperCaseCustomerName() {
      return customerName = customerName.toUpperCase();
};

function setBestCustomer () {
    return bestCustomer = "not bob";
};

function overwriteBestCustomer () {
    return bestCustomer = 'maybe bob';
};

const leastFavoriteCustomer = 'todd'

function changeLeastFavoriteCustomer () {
    return leastFavoriteCustomer = 'erick';
};