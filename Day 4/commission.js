console.log("linked commission")
// QUESTION 5
var sales = prompt("Please enter the sales figure");

if (sales>=0 && sales <= 5000) {
    console.log(sales*2/100) 
}
else if (sales>5000 && sales <= 10000){
    console.log(sales*5/100)
}
else if (sales>10000 && sales <= 20000){
    console.log(sales*7/100)
}
else {
    console.log(sales*10/100)
}