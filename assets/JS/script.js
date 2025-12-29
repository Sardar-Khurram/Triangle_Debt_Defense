// Hamburger Menu & Sidebar Toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close sidebar on window resize if it's open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Scroll-based Sticky Navbar with Glass Effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
