/*********************First part, adding li on click or keypress***************/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createLi(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function buttonClick(){
  if (inputLength() > 0) {
    createLi();
  }
}

function keyPress(event){
  if (inputLength() > 0 && event.which === 13) {
    createLi();
  }
}

button.addEventListener("click", buttonClick);

input.addEventListener("keypress", keyPress);

/****************************Line through--style ******************************/

var li = document.querySelectorAll("li");
////for loop
/*
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function(){
    this.classList.toggle("done");
  })
}
*/

//// forEach method, same stuff
li.forEach(function(value, index) {
  li[index].addEventListener("click", function(){
    this.classList.toggle("done");
  })
})

/**********************Remove on click*****************************************/

var rbutton = document.querySelectorAll(".remove");

rbutton.forEach(function(value, index) {
  rbutton[index].addEventListener("click", function(){
    this.previousElementSibling.remove();
    this.remove();
  })
})
