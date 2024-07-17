// ******************** For Loop ************************
// Write a program to print numbers from 1 to 10.
for (let num = 0; num <=10; num++) {
   console.log(num);
}

// Write a program to print the multiplication table of 5.
let tableOf=5;
for (let i = 1; i<=10; i++) {
    console.log(tableOf," X ",i," = ",tableOf*i);
}

// ******************** While Loop ************************
// Write a program to calculate the sum of numbers from 1 to 10.
let i=1;
sum=0;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log("Sum = ",sum);

// Write a program to print numbers from 10 to 1.
let x=1;
while(x<=10){
    console.log(x);
    x++;
}

// ******************** Do - While Loop ************************
// Write a program to print numbers from 1 to 5.
let n=1;
do{
    console.log(n);
    n++;
}while(n<=10);

// Write a program to calculate the factorial of a number.
let number=6;
let fact=1;
let l=1;
do{
    fact=fact*l;
    l++;
}while(l<=number);
console.log("Factorial = ",fact);

// ********************  Nested - Loop ************************
/*
    Write a program to print a pattern.
    *
    * *
    * * *
    * * * *
    * * * * *
*/
for (let j = 1; j<=5; j++) {
    let string="";
    for (let k = 1; k <=j; k++) {
       string+="* ";
       console.log(string);
    }
    console.log("\n");
}

// ******************** Loop Control Statements ************************
// Write a program to print numbers from 1 to 10,but skip the number 5.
for (let u = 1; u <= 10; u++) {
    if(u==5){
        continue;
    }
    console.log(u);
}
console.log()
// Write a program to print numbers from 1 to 10,but stop the loop when num is 7.
for (let v = 1; v <= 10; v++) {
    if(v==7){
        break;
    }
    console.log(v);
}