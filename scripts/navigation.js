const navbutton = document.querySelector('#ham-menu');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

// Update footer with current year and last modified date
const year = document.querySelector("#year");
const short = document.querySelector("#short");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (short) {
    short.textContent = document.lastModified;
}
