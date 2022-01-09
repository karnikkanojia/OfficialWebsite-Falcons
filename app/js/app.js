const downArrow = document.querySelector('.ico');
const aboutUs = document.querySelector('.about-us');

downArrow.addEventListener('click', () => {
    aboutUs.scrollIntoView({
        behavior: "smooth",
    });
})