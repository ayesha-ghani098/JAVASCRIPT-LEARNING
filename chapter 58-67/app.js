var mc = document.getElementById('main-content');
console.log(mc.childNodes);


var answers = document.getElementById('inner');
var maincon = document.getElementsByClassName('render');
answers.innerHTML = maincon.innerHTML;



var input = document.getElementById('first-name').value = "ayesha";
var input2 = document.getElementById('last-name').value = "ghani";
var input3 = document.getElementById('email').value = "ayeshaghani@gmail.com";


var fc = document.getElementById('form-content').nodeType;
console.log(fc);

console.log(document.getElementById('last-name').nodeType);
console.log(document.getElementById('last-name').childNodes.nodeType); //no child node
//update child node??


var mainfc = document.getElementById('main-content');
console.log(mainfc.firstChild);
console.log(mainfc.lastChild);

var presib = document.getElementById('last-name');
console.log(presib.previousSibling);
console.log(presib.nextSibling);


var email = document.getElementById('email');
console.log(email.parentNode);
console.log(email.nodeType);