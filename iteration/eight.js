const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "pythone Course",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price:12999
    },
]

const userchoice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
}, 0 )

console.log("Total price to pay: " + userchoice.toLocaleString())