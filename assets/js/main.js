
/*==== SHOW SIDEBAR ====== */
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/*=== Validate If Constant Exists === */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/*====== Validate If Constant Exists ===== */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

// HOME TEXT ANIMATION USING GSAP
function breakTheText() {
    var h1 = document.querySelector(".home__title")
    var h1text = h1.textContent

    var splittedText = h1text.split("")
    var halfValue = splittedText.length / 2

    var clutter = ""

    splittedText.forEach(function (elem,idx) {
        if(idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`
        }else {
            clutter += `<span class="b">${elem}</span>`
        }
    })
    
    h1.innerHTML = clutter // this line adds the manipulated text back to the h1 element

}
breakTheText()

gsap.from('.home__title .a', {
    y: 80,
    opacity: 0,
    duration: 3.6,
    delay: 0.15,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.from('.home__title .b', {
    x: 80,
    opacity: 0,
    duration: 4.6,
    delay: 0.17,
    stagger: 0.15,
    ease: "power3.out"
});

function breakText() {
    var h3 = document.querySelector(".home__subtitle")
    var h3text = h3.textContent

    var splittedText = h3text.split("")

    var clutter = ""

    splittedText.forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })

    h3.innerHTML = clutter
}

breakText()

gsap.from('.home__subtitle span', {
    y: 80,
    opacity: 0,
    duration: 3.6,
    delay: 0.19,
    stagger: 0.15,
    ease: "power3.out"
});

/*===== SKILLS TABS =====*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove('skills__active')
        })

        tab.classList.add('skills__active')
    })
})
/* ==== MIXITUP FILTER PORTFOLIO =====*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*===== Work Popup =====*/
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('work__button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
    // console.log(portfolioItem)
}

/* ======= SERVICES MODAL ======= */
const modalViews = document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*========= SWIPER TESTIMONIAL =========*/
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*========= INPUT ANIMATION =========*/
const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*========= SCROLL SECTIONS ACTIVE LINK =========*/
// get all event sections have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scrool position
    let scrollY = window.pageYOffset;
    // now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        /* - If our current scrool position enters the space where current section on screen is, add .active class to
        corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through
        sections as an selector */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
/*========= SHOW SCROLL UP =========*/

// Preloader Parts And Cursor Effects
window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.body.classList.add('show-content');
    }, 2500);
};

// Cursor Effects
const coords = {x: 0, y:0}
const circles = document.querySelectorAll(".circle");

const colors = ["rgb(183, 64, 20)","rgb(190, 26, 141)"," #7843ec"," #1a9bd8"," #16ccb8"," #a5ed10","rgb(240, 168, 80)"," #ffb4b9"," #e399ff"," #74acff"," #02b0b7"," #1ca811","rgb(235, 24, 24)","rgb(238, 62, 23)","rgb(233, 27, 133)","rgb(111, 44, 237)","rgb(24, 233, 153)","rgb(23, 54, 233)","rgb(244, 21, 214)","rgb(21, 231, 210)"];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y -y) * 0.4;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();