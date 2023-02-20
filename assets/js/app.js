const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const homepage = document.getElementById('home')
    burger.addEventListener('click', ()=> {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Toggle blur effect
        homepage.classList.toggle("blur-effect")

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`

            }
            console.log(index/7);
        });

        //Burgar Animation
        burger.classList.toggle('toggle');
    });

    
}

navSlide();


// Js Slide Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Change Email Color
const email = document.getElementById("email-button");

email.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    document.getElementById('email-address').style.color = "white";
  
    // reset the color after a short delay
    setTimeout(() => {
    document.getElementById('email-address').style.color = "#f4074e";
    }, 900);
  }, false);


// Pre Loader
document.addEventListener("DOMContentLoaded", function () {
    // on page load, hide the preloader animation
    document.getElementById("preloader").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("preloader").remove();
    }, 5000);
});