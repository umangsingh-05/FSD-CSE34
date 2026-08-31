let n,x,y,z;
x=0;
y=1;
z=2;
n=9;
for(let i=0;i<n;i++)
{
    let sum = x + y + z;
    console.log(sum);
    let temp = x;
    x = y;
    y = z;
    z = sum;
}
    
