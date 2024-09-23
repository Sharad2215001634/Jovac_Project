const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');

playButton.addEventListener('click',    () => {
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
});

pauseButton.addEventListener('click', () => {
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
});

// Hide the previous and next buttons
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
previousButton.style.display    = 'none';
nextButton.style.display = 'none';



// Make sure the DOM has loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const registerLoginBtn = document.getElementById('registerLoginBtn');

    // Check if the button exists before adding the event listener
    if (registerLoginBtn) {
        registerLoginBtn.addEventListener('click', function () {
            // Redirect to the target page
            window.location.href = '/Jovac Login/index.html'; // Replace with actual path
        });
    } else {
        console.error('Button not found');
    }
});

