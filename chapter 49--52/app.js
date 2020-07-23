var display = document.getElementById('displayform');
// submit function //
function submit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var conpassword = document.getElementById('conpassword').value;
    display.innerHTML = name + "<br>" + email + "<br>" + password + "<br>" + conpassword;
}


// Paragraph readmore//
var btn = document.getElementById('btn');
var para = document.getElementById('readmore');
para.style.visibility = "hidden";
btn.style.visibility = "visible";

function readmore() {
    para.style.visibility = "visible";
    btn.style.visibility = "hidden";
}