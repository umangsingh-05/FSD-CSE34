// function display(a,b)
// {
//     return a+b;
// }
// console.log(display(10,null));


// function display(message){
//     console.log("Hello "+message);
//     console.log("Hello ",{message});
//      console.log('Hello ${message}');
// }

// display("JS");


//1
function loggedInUser(user) {
    if (user) {
        return `${user} just logged in`;
    } else {
        return "Please enter a username";
    }
}
console.log(loggedInUser("Umang"));
console.log(loggedInUser());

//2
function loggedInUser(user) {
    return user ? `${user} just logged in` : "Please enter a username";
}
console.log(loggedInUser("Umang"));
console.log(loggedInUser());
