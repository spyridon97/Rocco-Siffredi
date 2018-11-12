/*
    Creates a dynamic background by populating randomly the #dynamic-background element
*/
const background = document.getElementById("dynamic-background");

const leftPadding = background.offsetWidth / 10;
const topPadding = background.offsetHeight / 7; 

const maxElements = 100;
let elements = 0;

const interval = setInterval(() => {
    const img = document.createElement("IMG");
    const img_id = Math.floor(Math.random()*4);
    img.src = "../images/icons/"+img_id+".png";
    img.classList.add("background-icon");
    
    // Calculate tha position
    img.style.left =  Math.ceil(Math.random()*10)*leftPadding % background.offsetWidth+"px";
    img.style.top = Math.ceil(Math.random()*10)*topPadding % background.offsetHeight+"px";

    background.appendChild(img);
    elements++;
    if (elements > maxElements) {
        clearInterval(interval);
    }
}, 3000);