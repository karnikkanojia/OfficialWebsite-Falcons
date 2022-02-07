const downArrow = document.querySelector(".ico");
const aboutUs = document.querySelector(".about-us");
const navBar = document.querySelector("nav");

if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true
}

downArrow.addEventListener("click", () => {
  aboutUs.scrollIntoView({
    behavior: "smooth",
  });
});

const counterUp = window.counterUp.default;
const infoObjects = document.querySelectorAll(".counter");

const callback = (entries) => {
  entries.forEach((entry) => {
    const ele = entry.target;
    if (entry.isIntersecting && !ele.classList.contains("is-visible")) {
      counterUp(ele, {
        duration: 2500,
        delay: 16,
      });
      ele.classList.toggle("is-visible");
      infoObserver.unobserve(ele);
    }
  });
};

const infoObserver = new IntersectionObserver(callback, {
  threshold: 0.9,
});

infoObjects.forEach((infoObject) => {
  infoObserver.observe(infoObject);
});

const infoTitles = [
  document.querySelector("#about-us-heading"),
  document.querySelector("#our-mission-heading"),
]

const typing = (entries) => {
  entries.forEach((entry) => {
    const ele = entry.target;
    if(entry.isIntersecting){
      const text = (ele.id === "about-us-heading") ? "ABOUT US" : "OUR MISSION";
      var i=0;
      function loop() {
        if(i<text.length){
          ele.innerHTML+=text[i];
          i++;
        }
        if(i==text.length) return;
        setTimeout(loop, 70);
      }
      loop();
      typingObserver.unobserve(ele);
    }
  });
};

const typingObserver = new IntersectionObserver(typing, {
  threshold: 1,
});

infoTitles.forEach( infoTitle => {
  typingObserver.observe(infoTitle);
})

const vulcanTail = document.querySelector('#vulcantail');
const vulcanTailUpper = document.querySelector("#vulcantailupper");
const vulcanTailUpper2 = document.querySelector("#vulcantailupper2");
const aboutUsPara = document.querySelector(".about-us-para");
const frontVulcan = document.querySelector('.bg-front-vulcan');
const contactWrapper = document.querySelector(".contact-wrapper");
const mapsSection = document.querySelector(".maps-link");
const formWrapper = document.querySelector(".form-wrapper");
const sponsors4 = document.querySelector(".sponsors-4");
const sponsorsPhone = document.querySelector("#sponsors-phone");
const sponsorsWide = document.querySelector("#sponsors-wide");

function bootstrapSize() {
  
  if(window.innerWidth < 768){
    vulcanTail.classList.add('h-50');
    vulcanTail.classList.add('w-100');
    vulcanTailUpper.classList.add('h-50');
    vulcanTailUpper.classList.add('w-100');
    vulcanTailUpper2.classList.add('h-50');
    vulcanTailUpper2.classList.add('w-100');
    aboutUs.classList.add('w-70');
    contactWrapper.classList.add('h-100');
    mapsSection.classList.add('h-50');
    formWrapper.classList.add('h-50');
    sponsorsPhone.style.display = "block";
    sponsorsWide.style.display = "none";
  }
  else{
    sponsorsPhone.style.display = "none";
    sponsorsWide.style.display = "grid";
    vulcanTail.classList.remove('h-50');
    vulcanTailUpper.classList.remove('h-50');
    vulcanTailUpper.classList.remove('w-100');
    vulcanTailUpper2.classList.remove('h-50');
    vulcanTailUpper2.classList.remove('w-100');
    vulcanTail.classList.remove('w-100');
    aboutUs.classList.remove('w-70'); 
    contactWrapper.classList.remove('h-100');
    mapsSection.classList.remove('h-50');
    formWrapper.classList.remove('h-50');
  }

  if(window.innerWidth < 949) {
    frontVulcan.classList.add('h-50');
    frontVulcan.classList.remove('h-60');
  }
  else{
    frontVulcan.classList.add('h-60');
    frontVulcan.classList.remove('h-50');
  }
}

window.addEventListener('resize', bootstrapSize);
window.addEventListener('DOMContentLoaded', bootstrapSize);