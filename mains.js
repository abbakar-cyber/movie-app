const menu = document.querySelector("#menu");
const burger = document.querySelector('#menu-icon');
 
burger.onclick = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

