// Booking Overlay Logic
const bookingOverlay = document.getElementById('bookingOverlay');
const openBookingBtns = document.querySelectorAll('.open-booking');
const closeBookingBtn = document.getElementById('closeBooking');

if (bookingOverlay && openBookingBtns.length > 0 && closeBookingBtn) {
    openBookingBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            bookingOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    });

    closeBookingBtn.addEventListener('click', () => {
        bookingOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scroll
    });

    // Close on clicking outside
    bookingOverlay.addEventListener('click', (e) => {
        if (e.target === bookingOverlay) {
            bookingOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Mobile Menu Toggle Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Add specific mobile menu styles if needed
    });
}

// Fade-in effect on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .review-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Handle #book anchor separately
        if (targetId === '#book') {
            e.preventDefault();
            if (bookingOverlay) {
                bookingOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            return;
        }

        // If it's a regular anchor on the same page
        if (targetId.startsWith('#') && targetId.length > 1) {
            const element = document.querySelector(targetId);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
