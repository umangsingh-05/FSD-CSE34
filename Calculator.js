const readline = require('readline');

const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter operator: ', (op) =>
{
    let x = 30, y = 5;

    switch(op)
    {
        case '+':
            console.log(x + y);
            break;

        case '-':
            console.log(x - y);
            break;

        case '*':
            console.log(x * y);
            break;

        case '/':
            console.log(x / y);
            break;

        case '%':
            console.log(x % y);
            break;

        case '^':
            console.log(x ** y);
            break;

        default:
            console.log("Invalid choice");
            break;
    }

    rl.close();
});