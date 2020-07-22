console.log("Ques 3")
 var name = prompt("Please enter your name:")
 
 document.write( '<h1> Welcome to Project 1 -  '+ name  )


function changeColor(){
    setTimeout(()=>{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
},3000);
}
changeColor();



// const ctime = document.getElementById('time')
// function clock (){
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     ctime.innerText = time;
// }
// clock();