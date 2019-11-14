
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



/*
var li = document.querySelector("li");

li.addEventListener("click", function(){
  li.classList.toggle("done");
})
*/
