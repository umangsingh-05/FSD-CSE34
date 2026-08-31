let x = 34597;
let temp = x;
let sum = 0;

while (temp > 0)
{
    let rem = temp % 10;
    sum += rem;
    temp = Math.floor(temp / 10);
}

console.log(sum);

temp = x;
let y = 0;

while (temp > 0)
{
    let rem = temp % 10;
    y = y * 10 + rem;
    temp = Math.floor(temp / 10);
}

console.log(y);