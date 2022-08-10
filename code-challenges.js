
// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// function: bubbleWater
// input: temp
// output: "temp" is below boiling, is above boiling, is at boiling
// i do not like how you did these "test variables" so i changed them to make it easier for my brain to process them. 

// var temp1 = 42
// var temp2 = 350
// var temp3 = 212

// const bubbleWater = (temp) => {
//     if (temp > 212) {
//         return `${temp} is above boiling`
//     } else if (temp < 212) {
//         return `${temp} is below boiling`
//     } else if (temp === 212) {
//         return `${temp} is at boiling`
//     }
// } 
// console.log(bubbleWater(temp1))
// console.log(bubbleWater(temp2))
// console.log(bubbleWater(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// 1. combine 2 arrays with .concat, it is not permanenet so i will have to make a var "conjoined" out of the result.
// 2. use .length on my new array
// input: myNumbers1, myNumbers2
// output:10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
// var conjoined = myNumbers1.concat(myNumbers2);
// console.log(conjoined.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// 1. create a function with the following acessors and mutators and fun variables
// 1. use .split to seperate each letter
// 2. use .reverse to reverse the array
// 3. use .join to re-attach the letters
// 4. return the reversed string


// const currentCohort = "Echo 2022"
// // console.log(currentCohort.reverse(""))
// function umop3pIsdn(currentCohort) {
// var chopped = currentCohort.split("")
// var esrever = chopped.reverse()
// var unChop = esrever.join("")
// return console.log(unChop)
// }
// umop3pIsdn(currentCohort)


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// use loop, start at 0, go to the length of the array, increase by one
// use modelo by 2 is stritcly equal to 0 is even and if not the it is odd. 
// remember 0 is even if i go this route.
// outut: odd even odd even odd even




// const myArray = [13, 34, 5, 10, 27, 42]



// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd")
//    }
// }




// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// function: substracto
// input: numbo1, numbo2
// outut: the result of the larger numbo - smaller numbo

// // Set one:
// const number1 = 58
// const number2 = 100

// // Set two:
// const number3 = 27
// const number4 = 24



// const subtracto =  (numbo1, numbo2) => {
//     if (numbo1 > numbo2) {
//         return   (numbo1 - numbo2)
//     } else { 
//         return (numbo2 - numbo1)
//     }
// }
// console.log(subtracto(number1, number2))
// console.log(subtracto(number3, number4))