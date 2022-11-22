let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


function myFunction() {
    var input = document.querySelector('.header-bottom input');
    var nameDiv = document.querySelectorAll('.listing .listing-box');

    var filter = input.value.toUpperCase();

    for(i = 0; i < nameDiv.length; i++) {
        h3 = nameDiv[i].getElementsByTagName('h3')[0];
        textValue = h3.textContent || h3.innerText;
        if(textValue.toUpperCase().indexOf(filter) > -1) {
            nameDiv[i].style.display = '';
        } else{
            nameDiv[i].style.display = 'none';
        }
    }
}