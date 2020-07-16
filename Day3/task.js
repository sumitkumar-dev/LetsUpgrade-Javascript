console.log ("Js file is linked")

//Question 1

var num = prompt ("Please entre a number")
console.log (`The number entered is ${num} and` ,num%2 == 0 ? 'the number is even.': 'The number is odd.')

//Question 2
//The OS name is Android and version is 9

var Os = prompt ("Please enter the OS name and version (is following format name _space_ version)")
var sep = Os.split(" ");
var name = sep[0];
var ver = sep[1];

    console.log(`The OS name is ${name} and version is ${ver}`)
    

//Question 3

var mark = prompt ("Please enter your marks");
if(mark>=90 && mark <101){
    console.log(`your marks are ${mark} and your grade is A`);
}
else if (mark>=60 && mark <91){
    console.log(`your marks are ${mark} and your grade is B`);;
}
else {
    console.log(`your marks are ${mark} and your grade is C`);;
}
