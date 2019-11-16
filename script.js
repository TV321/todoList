/*********************First part, adding li on click or keypress***************/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength(){
  return input.value.length;
}

function createLi(){
  //createLI
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  //create Button
  var removeButton = document.createElement("button");
  removeButton.appendChild(document.createTextNode("Remove button"));
  removeButton.classList.add("remove");
  //createDiv
  var div = document.createElement("div");
  div.appendChild(li);
  div.appendChild(removeButton);
  ul.appendChild(div);
  //ul.appendChild(li);
  input.value = "";

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
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
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle("done");
  }
}, false);


/**********************Remove on click*****************************************/
var remove = document.getElementsByClassName("remove");

var i;
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
