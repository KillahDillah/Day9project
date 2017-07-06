// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a,b){
    if (a < b) {
    return 'b';
}
    if (a > b) { 
    return 'a';
}
}
console.log(max(3,4))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a,b,c){
    if (a < b && b < c) {
    	return 'c';
    }
    if (a < b && c < b) {
    	return 'b';
    }
    if (a > b && b > c) {
    	return a;
    }
}
console.log(maxOfThree(3,2,1))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === 'a' || char === 'e'|| char === 'i' || char === 'o' || char === 'u') {
    	return true;
    }
    return false
}

console.log(isVowel('z'))

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(d,e) {
	return solution = d+e
}

console.log(sum(3,3))

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(f,g,h) {
	return solution = f + g + h
}

console.log(avg(2,2,2))
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(programming) {
	return programming.length
}

console.log(getLength('computer'))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(i,j) {
	if (j > i || i < j) {
		return true
	}
	return false
}

console.log(greaterThan(5,4))

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(k) {
	return 'Hello, ' + k + '!'
}

console.log(greet('Leah'))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlab(lo,mo,no,oh) {
	return 'Hello ' + lo + ' name ' + mo + ' Leah, ' + no + ' are ' + oh + '?'
}

console.log(madlab('my','is','how','you'))