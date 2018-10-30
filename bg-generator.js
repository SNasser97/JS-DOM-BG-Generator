/* 
Zero-to-mastery bg generator exercise

W3C Resources
oninput = https://www.w3schools.com/jsref/event_oninput.asp
element.value = https://www.w3schools.com/jsref/event_oninput.asp
element.textContent = https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 AND https://www.w3schools.com/jsref/prop_node_textcontent.asp
*/

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('random-gradient');

window.onload = function() {
  setGradient();
};

function randomColor() {
  var hexCol = '#'; 
  var hexCol2 = '#';
  var hexVals = '0123456789ABCDEF'; //values from 0-16, A=11, B=12 
  for(var i = 0; i < 6; i++) {
    hexCol = hexCol + hexVals[Math.floor(Math.random() * 16)]; //src: https://stackoverflow.com/questions/1484506/random-color-generator
    // '#' + 0-16, 0-16, 0-16, 0-16, 0-16, 0-16;
    hexCol2 = hexCol2 + hexVals[Math.floor(Math.random() * 16)];
  }
    color1.value = hexCol;
    color2.value = hexCol2;
    setGradient();

}

// function randomGradient() { //does not work as value requires hex
//   var r = Math.round(Math.random() * 255);
//   var g = Math.round(Math.random() * 255);
//   var b = Math.round(Math.random() * 255);
//   var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
//   //need to create random hex values
//   color1.value = rgb; <- testing (format is #rrggbb)
//   color2.value = rgb; <- need 6 values # and 0-9, A-F
//   setGradient(); //use this func to apply BG
// }

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value + ", " 
	+ color2.value + ")";
  
	css.textContent = body.style.background + ";";
}


color1.addEventListener('input', setGradient); //Recommended way
color2.addEventListener('input', setGradient);
randomBtn.addEventListener('click', randomColor);

// ^^ can use oninput in <input> (index.html file) instead

//	Difference between 2
//	seperation of concern (html in html, js in js file etc);
/* 
	In <tags> only one attribute vs eventlistener 
	where multiple functions can be added
*/

