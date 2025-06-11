// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"); this is known as implicit scope yaani ki maan liya hai ki woh scope me hai or yeh one liner code hota hai jo ";" isse khatam hota hai

// if (balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true 
const debitCard = true 

if (userLoggedIn && debitCard) {
    console.log("allow to buy courses");
} else {
    console.log("you are not eligible to buy the courses");
}
