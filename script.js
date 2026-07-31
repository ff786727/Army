// ===============================
// LOADER
// ===============================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

if (scrollBtn) {
    scrollBtn.addEventListener("click", scrollToTop);
}

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".animate").forEach(el => {

    observer.observe(el);

});
// =======================================
// COUNTER ANIMATION
// =======================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let count = 0;
        const speed = target / 120;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => counterObserver.observe(counter));

// =======================================
// TYPING EFFECT
// =======================================

const typing = document.querySelector(".typing");

if (typing) {

    const words = [
        "25B Letters",
        "26A Updates",
        "DSF Recruitment",
        "Pakistan Army"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const word = words[wordIndex];

        if (!deleting) {

            typing.textContent = word.substring(0, charIndex++);
            if (charIndex > word.length) {
                deleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }

        } else {

            typing.textContent = word.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}

// =======================================
// RIPPLE EFFECT
// =======================================

document.querySelectorAll(".btn").forEach
// =======================================
// CUSTOM CURSOR
// =======================================

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){

    if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }

    if(cursor2){
        setTimeout(function(){

            cursor2.style.left = e.clientX + "px";
            cursor2.style.top = e.clientY + "px";

        },100);
    }

});

// =======================================
// SCROLL PROGRESS BAR
// =======================================

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",function(){

let totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

let progressHeight =
(window.pageYOffset / totalHeight) * 100;

progress.style.width = progressHeight + "%";

});

// =======================================
// PARALLAX EFFECT
// =======================================

window.addEventListener("scroll",function(){

const hero = document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY =
window.pageYOffset * 0.4 + "px";

}

});

// =======================================
// FADE ANIMATION
// =======================================

const fadeItems = document.querySelectorAll(".card,.stat-card,.timeline-item");

const fadeObserver = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold
   
