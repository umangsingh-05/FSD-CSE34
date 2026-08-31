// const dateFormat = {
//     date: new Date(),

//     display(format = "american") {
//         if (format === "indian") {
//             return this.date.toLocaleDateString("en-IN");
//         } else {
//             return this.date.toLocaleDateString("en-US");
//         }
//     }
// };
// console.log(dateFormat.display());          
// console.log(dateFormat.display("indian"));


function requiredargs() {
    throw new Error("Argument is mandatory");
}

function display(a = requiredargs(), b = requiredargs()) {
    return a + b;
}

console.log(display(10, 20));
console.log(display());

