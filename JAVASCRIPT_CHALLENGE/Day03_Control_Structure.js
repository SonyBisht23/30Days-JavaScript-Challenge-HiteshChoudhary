// *************** IF- ELSE *********************
// Write a program to check if a number is positive, negative or zero.
let num=54;
if(num>=0){
    console.log(num,"is Positive.");
}else{
    console.log(num,"is Negative.");
}

// Write a program to check if a person is elligible to vote(age>=18).
let age=23;
if(age>=18){
    console.log("Can Vote.");
}else{
    console.log("Can't Vote.");
}

// *************** NESTED IF- ELSE *********************
// Write a program to find the largest of three numbers.
let num1=34;
let num2=117;
let num3=87;
if(num>num2){
    if(num1>num3){
        console.log(num1,"is Greater among",num1,num2,num3);
    }
    else{
        console.log(num3,"is Greater among",num1,num2,num3);
    }
}
else{
    if(num2>num3){
        console.log(num2,"is Greater among",num1,num2,num3);
    }
    else{
        console.log(num3,"is Greater among",num1,num2,num3);
    }
}

// *************** SWITCH CASE *********************
// Write a program that uses a switch case to determine the day of the week.
let day=14;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("MONDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATDAY");
        break;
    default:
        console.log("Please, Enter Correct Number Betwee (1-7).");
        break;
}

// Write a program that uses a switch case to assign a grade('A','B','C','D','E').
let marks=45;
switch (true) {
    case (marks>=90 ):
        console.log("You Got 'A' Grade.");
        break;
    case (marks>=75 && marks<=89):
        console.log("You Got 'B' Grade.");
        break;
    case (marks>=55 && marks<=74):
        console.log("You Got 'C' Grade.");
        break;
    case (marks>=45 && marks<=54):
        console.log("You Got 'D' Grade.");
        break;
    case (marks>=33 && marks<=44):
        console.log("You Got 'E' Grade.");
        break;
    default:
        console.log("Your are Fail.");
        break;
}

// *************** Conditiona (Ternary) Operator *********************
// Write a program that uses the ternary operator to check if a number is even or odd.
let nu=243;
let checkEvenOdd=(nu%2==0)?"EVEN":"ODD";
console.log(nu,"=",checkEvenOdd);

// *************** Combining Conditions *********************
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400.)
let year=2000;
if (year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("yes, a 'LEAP YEAR'.");
        }
        else{
            console.log("yes, a 'LEAP YEAR'.");
        }
    }
    else{
        console.log("yes, a 'LEAP YEAR'.");
    }
}
else{
    console.log("not, a 'LEAP YEAR'.");
}