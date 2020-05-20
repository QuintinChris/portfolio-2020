//Default to dark mode
window.addEventListener('load', (event) => {
    toggle();
});

const body = document.body;
const nav = document.getElementById('navbar');
const logo = document.getElementById('logo');
const toggleBtn = document.getElementById('toggleDark');
var hireBtn = document.getElementById('hirebtn');
var formBtn = document.getElementById('formBtn');


function toggle() {
    // from light to dark
    if (body.classList == 'dark-mode') {
        toggleBtn.classList = 'fas fa-toggle-off fa-2x';
        toggleBtn.style.color = 'black';
        body.classList = '';

        // Changing navbar class
        nav.classList = 'navbar sticky-top navbar-expand-sm navbar-light bg-light';

        // Change logo
        logo.src = '/images/cqBlack.png';

        // Change button class
        hireBtn.classList = 'btn btn-warning btn-sm';

    } else { // from dark to light
        toggleBtn.classList = 'fas fa-toggle-on fa-2x';
        toggleBtn.style.color = 'white';
        body.classList = 'dark-mode';

        nav.classList = 'navbar sticky-top navbar-expand-sm navbar-dark bg-dark';
        logo.src = '/images/cqWhite.png';

        hireBtn.classList = 'btn btn-outline-warning btn-sm';
    }

}


// Smooth scroll for nav links
// CREATE ID='work/portfolio/home' DIVS
let workLink = document.getElementById('workLink');
let portfolioLink = document.getElementById('portfolioLink');
let homeLink = document.getElementById('homeLink');
let logoBtn = document.getElementById('logoBtn');
workLink.addEventListener('click', function () {
    document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
});
portfolioLink.addEventListener('click', function () {
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth', });
});
homeLink.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});
logoBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});