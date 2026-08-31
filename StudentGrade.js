let eng , math , sci , total , avg , grade;
eng = 90;
math = 80;
sci = 70;
total = eng + math + sci;
avg = total / 3;
switch(true)
{
    case (avg >= 85):
        grade = 'A';
        break;
    case (avg >= 65):
        grade = 'B';
        break;
    case (avg >= 45):
        grade = 'C';
        break;
    case (avg >= 33):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log("Average marks: " + avg);
console.log("Grade: " + grade);