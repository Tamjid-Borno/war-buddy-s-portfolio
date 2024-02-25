document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor links with class "nav-link"
    var scrollLinks = document.querySelectorAll('a.nav-link');

    // Loop through each anchor link
    scrollLinks.forEach(function(scrollLink) {
        // Listen for click event
        scrollLink.addEventListener('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();
            
            // Get the target section ID from the href attribute
            var targetId = this.getAttribute('href').substring(1);
            
            // Find the target section by ID
            var targetSection = document.getElementById(targetId);
            
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('mousemove', function(event) {
    // Get the blurred circle element
    var blurredCircle = document.getElementById('blurredCircle');

    // Update the position of the blurred circle based on the mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    blurredCircle.style.left = mouseX + 'px';
    blurredCircle.style.top = mouseY + 'px';
});



function activateAnimations() {
    // Activate the primary and secondary buttons animation
    const buttons = document.querySelectorAll('.primary-button, .secondary-button');
    buttons.forEach(button => {
        button.style.animationPlayState = 'running'; // Start the animation
    });

    // Activate the paragraph animation
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.animationPlayState = 'running'; // Start the animation

    // Activate the headline animation
    const headline = document.querySelector('.headline');
    headline.style.animationPlayState = 'running'; // Start the animation

    // Activate the Batman image animation
    const batmanImage = document.querySelector('.batman-image');
    batmanImage.style.animationPlayState = 'running'; // Start the animation

    // Activate the blurry circle animation
    const blurryCircle = document.querySelector('.blurry-circle');
    blurryCircle.style.opacity = '1'; // Make the blurry circle visible
}


document.addEventListener('DOMContentLoaded', function () {
    var profileCard = document.querySelector('.uwuglassmorphic-profile-card');

    function checkScroll() {
        var scrollPosition = window.scrollY;
        var profileCardPosition = profileCard.getBoundingClientRect();

        // Trigger the animation when the top of the profile card enters the viewport
        if (profileCardPosition.top < window.innerHeight) {
            profileCard.classList.add('active');
        } else {
            profileCard.classList.remove('active'); // Reset the animation state
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check the initial scroll position
});

document.addEventListener('DOMContentLoaded', function () {
    var profileCard = document.querySelector('.glassmorphic-profile-card');

    function checkScroll() {
        var scrollPosition = window.scrollY;
        var profileCardPosition = profileCard.getBoundingClientRect();

        // Trigger the animation when the top of the profile card enters the viewport
        if (profileCardPosition.top < window.innerHeight) {
            profileCard.classList.add('active');
        } else {
            profileCard.classList.remove('active'); // Reset the animation state
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check the initial scroll position
});

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.glassmorphic-containerr');

    function checkScroll() {
        var scrollPosition = window.scrollY;
        var containerPosition = container.getBoundingClientRect().top;

        // Trigger the animation when the container enters the viewport
        if (containerPosition < window.innerHeight) {
            container.classList.add('fade-in');
        } else {
            container.classList.remove('fade-in'); // Reset the animation state
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check the initial scroll position
});

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  
