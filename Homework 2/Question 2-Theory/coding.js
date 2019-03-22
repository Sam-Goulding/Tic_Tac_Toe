function display2_1() {
  var myanswer  = "My answer goes here: 1) .dragonball isn't a variable in the object saiyan - output will be undefined.2) Will evaluate to true and 3) will evaluate to false. == will do type conversion, so it checks if value of null is equal to undefined (both are 'empty'). === will not do type conversion, so when checking null and undefined, it is false because null is a type where as undefined is not." // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: The original script wouldn't set x equal to 3.14 (if you were setting innerHTML of an object). use strict makes sure the code is 'extra clean' (no using undeclared variables). Taking the use strict out would allow you to use the statement: x = 3.14;."
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: In the HTML document (coding.html), there there is a div id=div_1134'. When we do the document.getElementById... we are simply retreving the children of the specified element. In this case, the element is the division with the tage div_1134, and the children are the tags within that division. "
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName("div"); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

