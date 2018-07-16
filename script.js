/*//function declaration
function newFunction() {}
//function  expression(ends in semicolon)
var newFunction = function() {};
//expression denotes/produces a value
1+3;
var a = 2;
return true;
//calling or invoking a function
alert();
newfunction(param1, param2);
//assign a variable
var a = true;
//method declaration (vs. function)
var obj = {
	thisIsAMethod: function() {	}
}
//access a method
obj.thisIsAMethod()
*/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", "
	+ color2.value + ")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);