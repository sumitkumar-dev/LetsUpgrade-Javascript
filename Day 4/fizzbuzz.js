
// QUESTION 1
console.log ("FizzBuzz Test")

var i=0;
for(i=0; i<=100;i++) {


if (i%3==0 && i%5!=0){
    console.log ("fizz")
}
else if (i%3==0 && i%5==0){
    console.log ("fizzbuzz")
}
else if (i%5==0 && i%3!=0){
    console.log ("Buzz")
}

else {
    console.log (i)
}
}

