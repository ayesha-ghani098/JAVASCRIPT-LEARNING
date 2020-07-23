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

var display2 = document.getElementById('displayform2');
// Applicant details in Tabular Form//
function submit2() {
    var name = document.getElementById('name2').value;
    console.log(name);
    var email = document.getElementById('email2').value;
    var t = document.getElementById('table');
    var row = t.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = email;


}