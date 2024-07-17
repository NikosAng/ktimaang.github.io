


document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in products as they come into view
    const products = document.querySelectorAll('.product');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    products.forEach(product => {
        product.style.opacity = 0;
        product.style.transform = 'translateY(20px)';
        product.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(product);
    });
});