const counters = document.querySelector('.hero-counters')
const hero_details = document.querySelector('.hero-details')
const hero_buttons = document.querySelector('.hero-buttons')
const hero_image = document.querySelector('.hero_image')

document.addEventListener('scroll', function() {
    let value = window.scrollY

    counters.style.marginLeft = -value * 0.4 + 'px'
    hero_details.style.marginLeft = -value * 0.8 + 'px'
    hero_buttons.style.marginLeft = -value * 0.6 + 'px'
    // hero_image.style.marginLeft = value * 0.1 + 'px'

    console.log(value);
})


const carousel = document.querySelector('.carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;
const carouselWidth = carousel.offsetWidth;
const itemWidth = 360; // Width of each carousel item
const totalItems = document.querySelectorAll('.carousel-item').length;
const maxScrollAmount = Math.max(0, totalItems * itemWidth - carouselWidth); // Calculate the maximum scroll amount

// Event listener for next button
nextBtn.addEventListener('click', function() {
    scrollAmount += itemWidth;
    if (scrollAmount >= maxScrollAmount) {
        scrollAmount = maxScrollAmount;
        nextBtn.disabled = true; // Disable the "Next" button if the last item is reached
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    prevBtn.disabled = false; // Enable the "Previous" button (in case it was disabled)
});

// Event listener for previous button
prevBtn.addEventListener('click', function() {
    scrollAmount -= itemWidth;
    if (scrollAmount <= 0) {
        scrollAmount = 0;
        prevBtn.disabled = true; // Disable the "Previous" button if the first item is reached
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    nextBtn.disabled = false; // Enable the "Next" button (in case it was disabled)
});
