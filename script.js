const counters = document.querySelector('.hero-counters')
const hero_details = document.querySelector('.hero-details')
const hero_buttons = document.querySelector('.hero-buttons')


document.addEventListener('scroll', function() {
    let value = window.scrollY

    counters.style.marginLeft = -value * 0.4 + 'px'
    hero_details.style.marginLeft = -value * 0.4 + 'px'
    hero_buttons.style.marginLeft = -value * 0.4 + 'px'

    console.log(value);
})