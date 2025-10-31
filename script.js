// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const formData = new FormData(this);
    const data = {
        company: formData.get('name'),
        contact: formData.get('contact'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };

    // Show success message
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');

    // Reset form
    this.reset();

    // Here you would typically send the data to your backend
    console.log('Form submission:', data);
});

// Add subtle scroll effect to navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid #e5e7eb';
    }
});

// Add subtle fade-in animation for product cards
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product and service cards
document.querySelectorAll('.product-card, .service-item, .industry-item').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(15px)';
    element.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(element);
});
