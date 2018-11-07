const siffredi = document.getElementById("siffredi-costume");
//const background = document.getElementsByClassName("stats")[0];

function moveBackground(event) {
    const position = -event.clientX / 80;
    //siffredi.style.marginRight = position+"px";
    siffredi.style.transform = "rotateY("+position+"deg)";
    //siffredi.style.filter = "blur("+(-position/20)+"px)";
}
