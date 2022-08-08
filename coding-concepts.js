// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

// const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: I was correct. Array are zero indexed, so when i use (.length) it is counting 0-9 and adding 1. It also is counting the "space" in the string


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: I was correct. console.log(greeting[4]) is telling the terminal to show what is at the 4th place in the string. It is zero indexed so 0=H 1=e 2=l 3=l 4=o 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: I was correct. console.log(languages[index]) is telling the terminal to show what is at the 1 place in the array with the name languages. it is asking for the 1 place because index = 1. it is not JavaScript because that is at 0. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it iwll take all the letters saturday and sunday and turn them to uppercase.
// b) Verify and explain:   it did not do what i thought it was going to do. I change the array to a string, and it worked. It appears as though .toUpperCase() only works with strings and will not convert an array to  a string


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: I as correct. console.log(typeof dataTypes.length) is telling the terminal to show what type of obect something is, and that something was a number. The number happend to be how many object were in the array name dataTypes. So to reword this i said: how many things are in this array, answer was 3. then i said. what is 3. and the console said, thats a number. 
