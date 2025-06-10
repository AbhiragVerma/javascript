const user = {
    username: "Abhirag Verma",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website.`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Aviral"
user.welcomeMessage()