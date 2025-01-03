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

// Simple and clean animations for About section
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 1500,
    reset: false
});

const srRight = ScrollReveal({
    origin: 'right',
    distance: '50px',
    duration: 1500,
    reset: false
});

// About info animation
srLeft.reveal('.about-info', {
    delay: 100
});

// Clean skill box animations
ScrollReveal().reveal('.skills-box', {
    delay: 200,
    interval: 200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    easing: 'ease-out'
});

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
srLeft.reveal('.about-info', {
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

// GitHub Repositories Fetch
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/dhacar/repos');
        const repos = await response.json();
        
        const repoList = document.getElementById('repo-list');
        repoList.innerHTML = ''; // Clear existing content
        
        repos.forEach(repo => {
            const repoBox = document.createElement('div');
            repoBox.className = 'project-box';
            
            repoBox.innerHTML = `
                <i class="uil uil-github"></i>
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available'}</p>
                <div class="repo-stats">
                    <span><i class="uil uil-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="uil uil-code-branch"></i> ${repo.forks_count}</span>
                </div>
                <a href="${repo.html_url}" target="_blank" class="repo-link">View Project</a>
            `;
            
            repoList.appendChild(repoBox);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubRepos);

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-control');
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const messageInput = document.querySelector('textarea');
    
    // Load saved form data if it exists
    nameInput.value = localStorage.getItem('form_name') || '';
    emailInput.value = localStorage.getItem('form_email') || '';
    messageInput.value = localStorage.getItem('form_message') || '';

    // Save form data as user types
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            localStorage.setItem(`form_${input.placeholder.toLowerCase()}`, input.value);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!nameInput.value.trim()) {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim()) {
            alert('Please enter your email');
            emailInput.focus();
            return;
        }

        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            alert('Please enter your message');
            messageInput.focus();
            return;
        }

        try {
            // Here you would typically send the form data to a server
            // For now, we'll just log it and clear the form
            console.log('Form submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            });

            // Clear form and localStorage
            form.reset();
            localStorage.removeItem('form_name');
            localStorage.removeItem('form_email');
            localStorage.removeItem('form_message');

            alert('Message sent successfully!');
            
        } catch (error) {
            alert('There was an error sending your message. Please try again.');
            console.error('Form submission error:', error);
        }
    });
});
