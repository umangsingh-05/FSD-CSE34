let x=23432;
let count=0;
for(let i=2; i<x; i++)
{
    if(x%i==0)
    {
        count++;
        break;

    }
}
if(count==0)
{
    console.log("Prime");
}
else
{
    console.log("Not Prime");
}