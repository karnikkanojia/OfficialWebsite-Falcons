const downArrow = document.querySelector(".ico");
const aboutUs = document.querySelector(".about-us");

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
  threshold: 1,
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
      const text = (ele.id === "about-us-heading") ? "ABOUT US" : "OUR\nMISSION";
      var i=0;
      function loop() {
        if(i<text.length){
          ele.innerHTML+=text[i];
          i++;
        }
        if(i==text.length) return;
        setTimeout(loop, 100);
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
