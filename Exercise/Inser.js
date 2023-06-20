// var newElement = document.createElement("h2");
// var newText = document.createTextNode("This is just text");
 var target = document.getElementById("demo");
//newElement.appendChild(newText);
//var element="<h2> This is heading</h2>";

var textl="This is heading"
target.insertAdjacentHTML("beforeend", textl);