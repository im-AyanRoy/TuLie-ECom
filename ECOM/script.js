document.addEventListener('DOMContentLoaded', function () {
    // Toggle Navigation Menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Image Slider for Hero Section
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);

    // Add to Cart Functionality
    const cart = [];

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;

            cart.push({ name: productName, price: productPrice });
            alert(`${productName} has been added to your cart.`);
        });
    });

    // Newsletter Signup Validation
    document.querySelector('.newsletter form').addEventListener('submit', function (event) {
        const emailInput = this.querySelector('input[type="email"]');
        const emailValue = emailInput.value;

        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
