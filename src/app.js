let buttons = document.querySelectorAll(".btn")
let emoji = document.querySelectorAll(".emoji")
let text = document.getElementById("text")
let quit = document.getElementById("quit")
let counter = document.getElementById("counter")
let check = document.getElementById("check")
var score = 0;
text.style.display = "none"
check.style.display = "none"

// let buttons = document.querySelectorAll(".myButton");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    text.style.display = "block"
    check.style.display = "block"
    text.value = ""
 
    check.addEventListener("click",function(){
       if(text.value == button.innerText){
      // alert("Your answer is true")
          button.innerText = Math.floor(Math.random()*30)
          button.disabled = "true"
      score++;
    }
    else{
      // alert("Your answer is false")
          button.innerText = Math.floor(Math.random()*30)
          button.disabled = "true"
    }
    })
   
  })

quit.addEventListener("click",function(){
button.innerText = Math.floor(Math.random()*30)
    button.disabled = "true"
    quit.disabled = "true"
})
});
quit.addEventListener("click",function(){
  alert("Do you want to quit this game")
  alert("If you quit then all the numbers will be displayed")
})
counter.addEventListener("click",function(){
  alert("your score is" + " " + score)
})
// function add() {
//     console.log("button");
// }
// emoji.forEach(gif)
// btn.forEach(button => {
//         gif.style.display = "none"
//        button.innerText = Math.floor(Math.random()*30)
// })
// btn.array.forEach(element => {
    
// });
// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// document.getElementById("submit").addEventListener("click", checkGuess);
// document.getElementById("hint").addEventListener("click", giveHint);
// document.getElementById("quit").addEventListener("click", quitGame);

// function checkGuess() {
//   let userGuess = parseInt(document.getElementById("guess").value);
//   if (isNaN(userGuess)) {
//     document.getElementById("message").innerHTML = "That's not a valid number!";
//   } else {
//     attempts++;
//     if (userGuess === numberToGuess) {
//       document.getElementById("message").innerHTML = `Congratulations! You found the number in ${attempts} attempts.`;
//       document.getElementById("submit").disabled = true;
//     } else if (userGuess < numberToGuess) {
//       document.getElementById("message").innerHTML = "Too low!";
//     } else {
//       document.getElementById("message").innerHTML = "Too high!";
//     }
//   }
// }

// function giveHint() {
//   if (numberToGuess % 2 === 0) {
//     document.getElementById("message").innerHTML = "The number is even.";
//   } else {
//     document.getElementById("message").innerHTML = "The number is odd.";
//   }
// }

// function quitGame() {
//   document.getElementById("message").innerHTML = `Okay, the number was ${numberToGuess}.`;
//   document.getElementById("submit").disabled = true;
// }