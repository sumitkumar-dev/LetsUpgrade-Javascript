console.log("Calculator:")

// Question 4
alert ("leave the second and third Input blank in case of squareroot")
var input1 = parseInt (prompt("Please entre the first no."))
var input2 = parseInt (prompt("Please entre the second no."))
var input3 = prompt("Please entre the operstor (say +,-,*,/,%)")

if (input3 == "+"){
    console.log(input1+input2)
}
else if (input3 == "-"){
    console.log(input1-input2)
}
else if (input3 == "*"){
    console.log(input1*input2)
}
else if (input3 == "/"){
    console.log(input1/input2)
}
else if (input3 == "%"){
    console.log(input1/input2 * 100 + "%")
}
else if (input3 == ""){
    console.log(Math.sqrt(input1))
}
else {
    console.log ("Invalid Input : Please try gain")
}
