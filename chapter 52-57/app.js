// var imagess = 
var imagepaths= ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.png"];
for (var i =0; i < imagepaths.length; i++){
var image = document.createElement("img");
image.src = imagepaths[i];
image.className = ".img-fluid";
document.getElementById('images').appendChild(image);
image.onclick = function() {modalopenFunction(this)};
}
var modimg = document.getElementById("modal-img");

function modalopenFunction(e){
    var openmod = document.getElementById('modal');
    openmod.classList.add('modal-open');
    openmod.classList.add('modal-close');
    openmod.style.display="block";
    modimg.src= e.src;
}
function onClosedImagModal(){
    var closemod = document.getElementById('modal');
    closemod.classList.add('modal-close');
    closemod.classList.add('modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}

var paragraph = document.getElementById('p');
var curpara = 20;
paragraph.style.fontSize=curpara+'px';
function zoomin(){
curpara= curpara+10;
paragraph.style.fontSize=curpara+'px';
}
function zoomout(){
    curpara= curpara-10;
paragraph.style.fontSize=curpara+'px';
}