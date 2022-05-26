
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


//Image gallery
let list = document.querySelectorAll('.gallery__list');
let itemBox = document.querySelectorAll('.gallery__item');
for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('gallery__list_active');
        }
        this.classList.add('gallery__list_active');
        let dataFilter = this.getAttribute('data-filter');
        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('gallery__list_active');
            itemBox[k].classList.add('gallery__list_hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('gallery__list_hide');
            itemBox[k].classList.add('gallery__list_active');
        }
    }
    })
}