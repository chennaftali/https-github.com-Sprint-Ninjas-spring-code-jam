//Terry Blinking on desktop view
const eyes = document.querySelector(".profile__hero-image-eyes");

//set interval
function startBlinking() {
    setInterval(blinking, 5500);
}

function blinking() {

    eyes.style.opacity = 1;

    setTimeout(function() {
        eyes.style.opacity = 0;
    }, 200);
}
startBlinking();


//responsive menu
const menuButton = document.querySelector(".nav__menu");
const menu = document.querySelector(".nav__links");

function toggleMenu() {
    menu.style.display == "flex" ? menu.style.display = "none" :
        menu.style.display = "flex";
}
menuButton.addEventListener('click', toggleMenu);



//display or hide menu when screen resizes 
displayMenu();
window.addEventListener('resize', displayMenu);

function displayMenu() {
    if (document.documentElement.clientWidth > 788) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}