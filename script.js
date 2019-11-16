/*********************First part, adding li on click or keypress***************/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

 //var rbutton = document.querySelectorAll(".remove");
var rbutton = document.getElementsByClassName("remove");

function inputLength(){
  return input.value.length;
}

function createLi(){
  //createLI
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.classList.add("li2")
  //create Button
  var removeButton = document.createElement("button");
  removeButton.appendChild(document.createTextNode("Remove button"));
  removeButton.classList.add("remove2");
  //createDiv
  var div = document.createElement("div");
  div.appendChild(li);
  div.appendChild(removeButton);
  ul.appendChild(div);
  //ul.appendChild(li);
  input.value = "";
}

function buttonClick(){
  if (inputLength() > 0) {
    createLi();

    var rbutton2 = document.getElementsByClassName("remove2");
    for (var i = 0; i < rbutton2.length; i++) {
      rbutton2[i].addEventListener("click", function(){
        this.parentElement.remove();
      })
    }

  }
}

function keyPress(event){
  if (inputLength() > 0 && event.which === 13) {
    createLi();

    var rbutton2 = document.getElementsByClassName("remove2");
    for (var i = 0; i < rbutton2.length; i++) {
      rbutton2[i].addEventListener("click", function(){
        this.parentElement.remove();
      })
    }


  }
}

button.addEventListener("click", buttonClick);

input.addEventListener("keypress", keyPress);

/****************************Line through--style ******************************/

//var li1 = document.querySelectorAll("li");
//var li = document.getElementsByTagName("li");
////for loop
/*
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function(){
    this.classList.toggle("done");
  })
}
*/

//// forEach method, same stuff
/*
  li1.forEach(function(value, index) {
  li1[index].addEventListener("click", function(){
    this.classList.toggle("done");
  })
})*/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle("done");
  }
}, false);


/**********************Remove on click*****************************************/

/*
rbutton.forEach(function(value, index) {
  rbutton[index].addEventListener("click", function(){
    this.previousElementSibling.remove();
    this.remove();
  })
})
*/

for (var i = 0; i < rbutton.length; i++) {
  rbutton[i].addEventListener("click", function(){
    this.previousElementSibling.remove();
    this.remove();
  })
}
