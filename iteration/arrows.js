const user = {
    username: "Abhirag Verma",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website.`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Aviral"
// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}

chai()

const addone = (num1, num2) => (num1 + num2)  //this is shortcut way of writing functions in form of arrow functions and without return or bata dete hai ki curly brackets me return likha jata hai naki parenthesis me 

// console.log(addone(5, 7))

const addTwo = (num1, num2) => {username: "Abhirag Verma"} // it gives the undefined because we have used curly brackets and with out return 
console.log(addTwo(5, 8));

const addthree = (num1, num2) => ({username: "Abhirag Verma"})
console.log(addthree(8, 9))