// navigation bar function
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");
  let menuIcon = document.querySelector(".nav-menu-btn i");
  
  if(menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
      menuIcon.classList.remove("uil-bars");
      menuIcon.classList.add("uil-times", "active");
  } else {
      menuBtn.className = "nav-menu";
      menuIcon.classList.remove("uil-times", "active");
      menuIcon.classList.add("uil-bars");
  }
}


// shodow navigation bar while scrolling
window.onscroll = function() { headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

// ______________________________________________________


// typing effect 

let typingEffect = new Typed(".typedText", {
  strings: ["designer", "content creator", "developer"],
  loop :true,
  typedSpeed :100,
  backSpeed : 80,
  backDelay :2000,

})



// scroll animation - Base configuration
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true  // This ensures animations replay on scroll
})

// Left animations configuration
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 1800,
    reset: true,  // This ensures animations replay on scroll
    useDelay: 'onload' // This makes sure delay works on every scroll
})

// Right animations configuration
const srRight = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 1800,
    reset: true,  // This ensures animations replay on scroll
    useDelay: 'onload' // This makes sure delay works on every scroll
})

// About section reveal with enhanced configuration
srLeft.reveal('.about-info', {
    delay: 100,
    opacity: 0,
    mobile: true,  // Enable on mobile devices
    interval: 100, // Time between animations
    cleanup: true  // Clean up animations after they complete
})

// home
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

//   project box 
sr.reveal('.project-box',{interval: 200})


// 


// headigs

sr.reveal('.top-header',{})

// SCROLL REVEAL LEFT_RIGHT ANIMATION 
// About section components with consistent animations
srLeft.reveal('.intro-section', {
    delay: 100,
    duration: 1800,
    distance: '60px',
    opacity: 0,
    origin: 'left',
    reset: true
})

// Skills, Experience, and Form animations from right
srRight.reveal('.skills-box, .experience', {
    delay: 100,
    duration: 1800,
    distance: '60px',
    opacity: 0,
    origin: 'right',
    reset: true,
    interval: 200  // Creates a nice staggered effect between elements
})

// Other animations
srRight.reveal('.form-control', {
    delay: 100,
    duration: 1800,
    distance: '60px',
    opacity: 0
})

srLeft.reveal('.contact-info', {
    delay: 100,
    duration: 1800,
    distance: '60px',
    opacity: 0
})

// CHANGE ACTIVE LINK

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)