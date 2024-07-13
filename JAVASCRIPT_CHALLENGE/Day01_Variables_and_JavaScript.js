// ******************** Variable Declaration *****************************
//Declare a variable using "var", assign it a number, and log the value to the console.

var profileId=12345678;
console.log(profileId)

//Declare a variable using "let", assign it a string, and log the value to the console.

let socialSite="LinkdIn";
console.log(socialSite);

// ******************** Constant Declaration *****************************
//Declare a variable using "const", assign it a boolean value, and log the value to the console.

const isLoggedIn=true;
console.log(isLoggedIn);

// ******************** Data Types *****************************
/*Create variables of different data types(number, string, boolean, object, array) and 
log each variable's type using the typeof operator.*/

let logInID=3245;
let loginName="Sony Bisht";
let isLoggedOut=false;
let loginInfo={
    name:"Sony Bisht",
    id:321,
    login:true
};
let Tutorials=["Power BI","SQL","Python","Excel"];
console.log("LoginID =",logInID,", Type=",typeof(logInID));
console.log("LoginName =",loginName,", Type=",typeof(loginName));
console.log("isLoggedOut=",isLoggedOut,", Type=",typeof(isLoggedOut));
console.log("LoginInfo =",loginInfo,", Type=",typeof(loginInfo));
console.log("Tutorials =",Tutorials,", Type=",typeof(Tutorials));

// ******************** Reassigning Variables *****************************
/*Declare a variable  using "let", assign it an initial value, ressign a new value, 
and log both values to the console.*/

let country="India";
console.log(country);

country="Australia";           //reassign
console.log(country);

// ******************** Understanding *****************************
//Try reassigning a variable declared with "const" and observe the error.

const course="30 Days JS challenge";
console.log(course);
//course="Python Challenge";     //reassign
//console.log(course);          //can't reassign to "constant" variable


// ******************** Variable Types Console Log *****************************
/*Write a script that declares variables of different data types and logs both 
the value and type of each variable to the console.*/

let accountNo=24;
let accountName="Sony Bisht";
let isLoogedIn=false;
let coursePrice=null;
let officePlace;
let costOfProject=123456789855332235n;
let cuponCode=Symbol('123');

console.log("AccountNo:",accountNo,", Type=",typeof(accountNo));
console.log("AccountName:",accountName,", Type=",typeof(accountName));
console.log("LoggedIn:",isLoggedIn,", Type=",typeof(isLoggedIn));
console.log("coursePrice:",coursePrice,", Type=",typeof(coursePrice));
console.log("OfficePlace:",officePlace,", Type=",typeof(officePlace));
console.log("costOfProject:",costOfProject,", Type=",typeof(costOfProject));
console.log("cuponCode:",cuponCode,", Type=",typeof(cuponCode));

// ******************** Reassignment Demo *****************************
/* Create a script that demonstrates the difference in behaviour between let and const when 
it comes to reassignment.*/

let demo="123ABC";
console.log(demo);
// Reassignment: "Let" doesn't give Reassignment, and reassign value Easiy.
demo="ABCDEF";
console.log(demo);

const newDemo="1234DR";
console.log(newDemo);
//Reassignment: "Const" Give "TypeError" , and don't reassign the value.
// newDemo="wesrr";
// console.log(newDemo);