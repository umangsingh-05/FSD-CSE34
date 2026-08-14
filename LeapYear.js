// let year = 1100;

// if (year % 4 == 0)
// {
//     if (year % 100 == 0)
//     {
//         if (year % 400 == 0)
//         {
//             console.log(year + " is a Leap Year");
//         }
//         else
//         {
//             console.log(year + " is Not a Leap Year");
//         }
//     }
//     else
//     {
//         console.log(year + " is a Leap Year");
//     }
// }
// else
// {
//     console.log(year + " is Not a Leap Year");
// }


// 


let y=2024;
let res = ((y%4==0 && y%100!=0) || (y%400==0)) ? "Leap year" : "Not a Leap year";
console.log(res);
