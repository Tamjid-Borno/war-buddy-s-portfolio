// Smooth scrolling

// Toggle the navigation menu on mobile devices
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
});

// Close the navigation menu when a menu item is clicked
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function() {
        var navMenu = document.querySelector('nav ul');
        navMenu.classList.remove('active');
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

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link
            const targetId = this.getAttribute('href'); // Get the href attribute of the clicked link

            // Change the URL hash without reloading the page
            history.pushState(null, null, targetId);

            // Scroll to the target section smoothly
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('.nav-link[href="#home"]');

    homeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Check if the user has scrolled to the "Home" section
        const homeSection = document.getElementById('home');
        const homeSectionRect = homeSection.getBoundingClientRect();
        const isHomeSectionVisible = homeSectionRect.top >= 0 && homeSectionRect.bottom <= window.innerHeight;

        // If the "Home" section is visible, activate the animations and reload the page
        if (isHomeSectionVisible) {
            // Activate the animations
            activateAnimations();

            // Reload the page after a short delay
            setTimeout(function() {
                window.location.reload();
            }, 100); // Adjust the delay as needed
        }
    });
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