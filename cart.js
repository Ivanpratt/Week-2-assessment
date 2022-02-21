///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]



const summedPrice = cart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)
console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

calcFinalPrice = function(cartTotal, couponValue, tax) {
    let finalvalue = (cartTotal * (1 - tax)) - couponValue
    return finalvalue
}

console.log(calcFinalPrice(100, 10, 0.26))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
 I am thinking typically a store would keep the name, credit card details, and store location they shop at.
regarding each customer. I don't think they would worry about preffered foods, adresses, or other personal 
 information regarding each customer. They would just be interested in selling as many products as they can, and 
 only need the person's name and credit card information so they can complete a purchase. (Saving the credit card 
info means a faster checkout time and more ease for the customer - they still have to enter their CVE). Saving the 
store location the customer shops at can help the Company decide to build more stores in high-demand areas.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customerdata = {
    name: "Ryan Reighnolds",
    ccInformation: "2039-2230-3693-7921",
    storeLocation: "Salt Lake City"
}
