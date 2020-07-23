function delet(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
}


// question 4
var img = document.getElementById('image');
img.src = "images/10.jpg";
// onclick //
function imagechng() {
    img.src = "images/13.jpg"

}

// mouseout //
function firstpic() {
    img.src = "images/10.jpg";
}

// counter//
var i = 0;
var x = document.getElementById('value');
x.innerHTML = i;

function inc() {
    x.innerHTML = ++i;
}

function dec() {
    x.innerHTML = --i;
}