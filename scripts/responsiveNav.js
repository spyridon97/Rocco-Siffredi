let isResponsive = false;

function toggleResponsive() {
    const header = document.getElementsByTagName('header')[0];
    const items = document.getElementsByClassName('menu-item');
    if (isResponsive) {
        header.className = "";
        for (let item of items){
            item.className = "menu-item"
        }
        isResponsive = false;
        return;
    }
    header.className = "responsive";
    for (let item of items){
        item.className += " responsive"
    }
    // Listen for when the screen is big enough
    document.getElementsByTagName('body')[0].onresize = onResise;
    isResponsive = true;
    return;
}

function onResise() {
    // Disable responsiveness
    if (window.innerWidth > 800) {
        isResponsive = true;
        toggleResponsive();
        isResponsive = false;
    }
}

