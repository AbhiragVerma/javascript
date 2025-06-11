// const userEmail = "hitesh@google.com"
// const userEmail = ""
const userEmail = []

if (userEmail){
    console.log("Got user email")
} else {
    console.log("no useremail")
}

// falsy values -> false, 0, -0, bigint 0n, "", null, undefined, NaN

// truthy values -> "0", "false" (string ke andar voh truth value ho jata hai), [], {}, or falsy values ko chhod kar saari truthy values and important one function(){} ye wala bhi truthy value hai

if (userEmail.length === 0) {
    console.log("array is empty")
} // this is method to check that array is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")