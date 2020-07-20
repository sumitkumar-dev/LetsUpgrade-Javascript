console.log("Prime no.")
// Question 7
var num = (prompt ("Please enter a no."));


outer : for (i=2;i<num;i++) {
  inner :  for (let j=1;j<num;j++){
    while (j>1 && j<i){
        if (i%j == 0) {
            continue outer;
        }
        else {
            continue inner;
        }
    }
}
console.log(i);
}
