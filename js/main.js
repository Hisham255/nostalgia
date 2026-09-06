// * global js file 

// ! navbar 

const navLinks = document.getElementById('nav-list');
const navMenu = document.getElementById('nav-menu');
const showMenu = document.getElementById('show-menu');
const overlay = document.getElementById("overlay");

showMenu.innerHTML = navLinks.innerHTML;
showMenu.innerHTML += `<li><a class="btn text-decoration-none font-weight-bolder " href="#">Check Out</a></li>`;

navMenu.addEventListener("click", () => {
    showMenu.classList.toggle("open");
    overlay.classList.toggle('open');

    if (showMenu.classList.contains("open")) {
        navMenu.innerHTML = `<i class="fa-solid fa-x fa-sm"></i>`;
    }
    else {
        navMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }

})

overlay.addEventListener("click" , () => {
    overlay.classList.remove('open');
    showMenu.classList.remove("open");
    navMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
})






