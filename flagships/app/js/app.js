const flagshipsContainer = document.querySelector('.flagships');
const navBar = document.querySelector('.navbar');
let navStyle = window.getComputedStyle(navBar);

flagshipsContainer.style.setProperty('margin-top', navStyle.height);

window.addEventListener('resize', () => {
    flagshipsContainer.style.setProperty('margin-top', navStyle.height);
});