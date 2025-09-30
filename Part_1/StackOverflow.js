// Part one of the assignment
//This Script will measure the size of the call stack.
//basically, I recursively put functions onto the stack until it reached overflow, 
//then caught that error to print the count.

//Declare a global counter variable
//create a simple function that increments the variable, and then calls itself recursively.
//Surround the initial funtion call in a try/catch block
//with in the catch, log the error and the value of the counter variable.

// 1- Declaring a Global counter variable to track the depth of the call stack
let counter = 0;
let mesg = "Maximum call stack size exceeded!";

// 2- recursive function
//Create a simple function that increments the variable, and then calls itself recursively.
//So the Recursive function to increment the counter and call itself

  function stackOverflow() {
    counter++;  // here the variable is incremented
    stackOverflow();    // here it will call itself
}

// Wrap the initial function call in a try/catch block to handle stack overflow error
try {
      stackOverflow();
} catch (error) {
    console.log("Hey AHMED =>", mesg, error);
    console.log("Also, Maximum call stack size is:", counter);
}

//===========================================================================================
// This code defines a recursive function recursiveFunction() that continuously calls itself,
// incrementing a global counter variable counter with each call. It then wraps the
// initial function call in a try/catch block to catch the "stack overflow" error.
// When the error is caught, it logs the error message and the value of the counter variable,
// effectively measuring the maximum size of the call stack before it overflows.
