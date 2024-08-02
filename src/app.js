let buttons = document.querySelectorAll(".btn")
let emoji = document.getElementById("emoji")
let text = document.getElementById("text")
let quit = document.getElementById("quit")
let counter = document.getElementById("counter")
let check = document.getElementById("check")
let topdiv = document.querySelector(".top")

var score = 0;
text.style.display = "none"
check.style.display = "none"


buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    text.style.display = "block"
    check.style.display = "block"
    // topdiv.style.display ="block"
    text.value = ""
 
    check.addEventListener("click",function(){
      if(text.value == ""){
        alert("Please enter a number")
        text.value = ""
      }
      else if(text.value == button.innerText){
      // alert("Your answer is true")
          button.innerText = Math.floor(Math.random()*30)
          button.disabled = "true"
              text.style.display = "none"
    check.style.display = "none"


        score++;
    }
    else{
      button.innerHTML = Math.floor(Math.random()*30)
          button.disabled = "true"
              text.style.display = "none"
    check.style.display = "none"
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
